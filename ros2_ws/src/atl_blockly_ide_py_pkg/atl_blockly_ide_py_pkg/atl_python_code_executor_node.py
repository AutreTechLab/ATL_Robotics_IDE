#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from atl_ide_interfaces.msg import PYTHONCODEEXECUTORSTATUS
from atl_ide_interfaces.srv import PYTHONCODEEXECUTOR
import os
import re
import json

# Global variables
atl_ide_debug_level = 0 # 0 = off, 1 = debug code, 2 = load debuggable blockly js
						# default is set by the ROS2 args declare_parameter
						# it can be overwritten by the service call
python_code_current_step = "not yet started"
						# current step in the python code execution

class atl_python_code_executor_node(Node): # MODIFY NAME
	def __init__(self):
		super().__init__("atl_IDE_webappserver_node") # MODIFY NAME
		self.declare_parameter("notejs_port", 8081)
		self.declare_parameter("default_debug_level", 1)
		atl_ide_debug_level = self.get_parameter("default_debug_level").value

		self.python_code_executor_timer_ = self.create_timer(1.0, self.atl_python_code_executor)

		# ######################################################
		# ROS2 Publishers and Services
		#-------------------------------------------------------
		self.PYTHONCODEEXECUTORSTATUS_status_publisher_ = self.create_publisher(PYTHONCODEEXECUTORSTATUS, "PYTHONCODEEXECUTORSTATUS_publisher", 10)
		self.python_code_executor_service_ = self.create_service(PYTHONCODEEXECUTOR, "python_code_executor_service", self.callback_python_code_executor_service)
		self.get_logger().info("Python code executor started")


	def atl_python_code_executor(self):
		msg = PYTHONCODEEXECUTORSTATUS()
		msg.debug_level = atl_ide_debug_level
		msg.current_step = python_code_current_step
		self.PYTHONCODEEXECUTORSTATUS_status_publisher_.publish(msg)


	def callback_python_code_executor_service(self, request, response):
		print("PE Service - target_bot: " + str(request.target_bot))
		print("PE Service - debug_level: " + str(request.debug_level))
		print("PE Service - code: " + str(request.code))
		response.success = True
		return response

def main(args=None):
	rclpy.init(args=args)
	node = atl_python_code_executor_node()
	rclpy.spin(node)
	rclpy.shutdown()

if __name__ == "__main__":
	main()
