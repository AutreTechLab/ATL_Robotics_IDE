#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from atl_ide_interfaces.msg import PYTHONCODEEXECUTORSTATUS
from atl_ide_interfaces.srv import PYTHONCODEEXECUTOR

from multiprocessing import Process
import signal, time
import urllib.request
from subprocess import Popen, PIPE, STDOUT

import os
import re
import json

# Global variables
atl_ide_debug_level = 0 # 0 = off, 1 = debug code, 2 = load debuggable blockly js
						# default is set by the ROS2 args declare_parameter
						# it can be overwritten by the service call
python_code_current_step = "not yet started"
						# current step in the python code execution

nodejs = None

class atl_python_code_executor_node(Node): # MODIFY NAME
	def __init__(self):
		super().__init__("atl_python_code_executor_node") # MODIFY NAME
		self.declare_parameter("notejs_port", 8081)
		self.declare_parameter("atl_nodejs_install_dir", '/home/autretechlab/Documents/GitHub/ALT_Robotics_IDE/webapp_root/nodejs/')
		self.declare_parameter("default_debug_level", 1)
		atl_ide_debug_level = self.get_parameter("default_debug_level").value

		self.python_code_executor_timer_ = self.create_timer(1.0, self.atl_python_code_executor)

		# ######################################################
		# ROS2 Publishers and Services
		#-------------------------------------------------------
		self.PYTHONCODEEXECUTORSTATUS_status_publisher_ = self.create_publisher(PYTHONCODEEXECUTORSTATUS, "PYTHONCODEEXECUTORSTATUS_publisher", 10)
		self.python_code_executor_service_ = self.create_service(PYTHONCODEEXECUTOR, "python_code_executor_service", self.callback_python_code_executor_service)
		self.get_logger().info("Python code executor started")

		self._starter = None
		self._task = None
		try:
			self.get_logger().info(self.get_parameter("atl_nodejs_install_dir").value + 'headless.js')
			nodejs = Popen(['node' , self.get_parameter("atl_nodejs_install_dir").value + 'headless.js'])
		except FileNotFoundError as e:
			self.get_logger().info("node.js wasn't found in your system.")
			self.get_logger().error(
				"Secure mode (default) requires node.js. Please install node.js and follow INSTALLATION.md instructions.")
			return

	def atl_logger(log_level, log_message):
		if log_level == "E":
			self.get_logger().error(str(log_message))
		else:
			self.get_logger().info(str(log_message))

	def atl_python_code_executor(self):
		msg = PYTHONCODEEXECUTORSTATUS()
		msg.debug_level = atl_ide_debug_level
		msg.current_step = python_code_current_step
		self.PYTHONCODEEXECUTORSTATUS_status_publisher_.publish(msg)


	def callback_python_code_executor_service(self, request, response):
		self.get_logger().info("PE Service - target_bot: " + str(request.target_bot))
		self.get_logger().info("PE Service - debug_level: " + str(request.debug_level))
		self.get_logger().info("PE Service - action: " + str(request.action))
		self.get_logger().info("PE Service - code: " + str(request.code))
		if request.action == "RUN":
			try:
				req = urllib.request.Request(
					url='http://localhost:' + str(self.get_parameter("notejs_port").value) + '/translate',
					headers={'Content-Type': 'text/plain'},
					data=bytes(str(request.code), 'utf-8'))
				with urllib.request.urlopen(req) as f:
					toExecute = f.read().decode('utf-8')
				self.get_logger().info('[Code Executor] Executing code:')
				self.get_logger().info(toExecute)
				response.success = True
			except Exception as e:
				response.success = False
				import traceback
				traceback.print_exc()
				raise e
		return response
		if toExecute.find("def on_start():") == -1:
			self.get_logger().error("[Code Executor] Block on_start() not defined")
			return

		starter_code = 'AtlDebugLevel = None\n' + toExecute + """
try:
	if callable(on_cube_tapped):
		robot.world.add_event_handler(cozmo.objects.EvtObjectTapped, on_cube_tapped)
		print("added on_cube_tapped handler")
except NameError as ex:
	print(ex)
	print("on_cube_tapped handler not added")

try:
	callable(on_start)
except NameError:
	print("Block on_start() not defined")

on_start()
bot.resetCustomObjects()
"""
		self.get_logger().info("[Code Executor]" + starter_code)


def main(args=None):
	rclpy.init(args=args)
	node = atl_python_code_executor_node()
	rclpy.spin(node)
	rclpy.shutdown()

if __name__ == "__main__":
	main()
