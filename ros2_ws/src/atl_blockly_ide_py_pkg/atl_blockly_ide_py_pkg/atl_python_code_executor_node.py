#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from atl_ide_interfaces.msg import PYTHONCODEEXECUTORSTATUS
from atl_ide_interfaces.srv import PYTHONCODEEXECUTOR
from atl_ide_interfaces.msg import ATLIDESESSIONMANAGER

from multiprocessing import Process
from ws4py.client.threadedclient import WebSocketClient
import signal, time
import urllib.request
from subprocess import Popen, PIPE, STDOUT

import os
import re
import json
import threading
import trace
import sys
import time

# Global variables
atl_ide_debug_level = 0  # 0 = off, 1 = debug code, 2 = load debuggable blockly js
# default is set by the ROS2 args declare_parameter
# it can be overwritten by the service call
python_code_current_step = "not yet started"
# current step in the python code execution

nodejs = None
thread1 = None


class atlideThread(threading.Thread):
    def __init__(self, threadID, name, code, *args, **keywords):
        threading.Thread.__init__(self, *args, **keywords)
        self.killed = False
        self.threadID = threadID
        self.name = name
        self.code = code

    def start(self):
        from rclpy.node import get_logger
        get_logger(str(self.threadID) + " " + str(self.name)).info("Starting Thread for code \n" + str(self.code))
        self.__run_backup = self.run
        self.run = self.__run
        threading.Thread.start(self)

    def __run(self):
        sys.settrace(self.globaltrace)
        self.__run_backup()
        self.run = self.__run_backup

    def globaltrace(self, frame, event, arg):
        if event == 'call':
            return self.localtrace
        else:
            return None

    def localtrace(self, frame, event, arg):
        if self.killed:
            if event == 'line':
                raise SystemExit()
        return self.localtrace

    def kill(self):
        from rclpy.node import get_logger
        get_logger(str(self.threadID) + " " + str(self.name)).info("Killing " + str(self.name))
        self.killed = True

def run_code(threadID, name, code):
    from rclpy.node import get_logger
    exec(code)  # run the python code
    get_logger(str(threadID) + " " + str(name)).info("Job done! Exiting " + str(name))



class atl_python_code_executor_node(Node):  # MODIFY NAME
    def __init__(self):
        super().__init__("atl_python_code_executor_node")  # MODIFY NAME
        self.declare_parameter("notejs_port", 8081)
        self.declare_parameter("atl_nodejs_install_dir",
                               '/home/autretechlab/Documents/GitHub/ATL_Robotics_IDE/webapp_root/nodejs/')
        self.declare_parameter("default_debug_level", 1)
        atl_ide_debug_level = self.get_parameter("default_debug_level").value

        self.python_code_executor_timer_ = self.create_timer(1.0, self.atl_python_code_executor)

        # ######################################################
        # ROS2 Publishers and Services
        # -------------------------------------------------------
        self.PYTHONCODEEXECUTORSTATUS_status_publisher_ = self.create_publisher(PYTHONCODEEXECUTORSTATUS,
                                                                                "PYTHONCODEEXECUTORSTATUS_publisher",
                                                                                10)
        self.python_code_executor_runcode_service_ = self.create_service(PYTHONCODEEXECUTOR, "python_code_executor_runcode_service",
                                                                 self.callback_python_code_executor_runcode_service)
        self.get_logger().info("Python code executor runcode started")

        self.subscription = self.create_subscription(ATLIDESESSIONMANAGER,'atl_session_manager_publisher',self.listener_callback,0)
        self.subscription

        try:
            self.get_logger().info(self.get_parameter("atl_nodejs_install_dir").value + 'headless.js')
            nodejs = Popen(['node', self.get_parameter("atl_nodejs_install_dir").value + 'headless.js'])
        except FileNotFoundError as e:
            self.get_logger().info("node.js wasn't found in your system.")
            self.get_logger().error(
                "Secure mode (default) requires node.js. Please install node.js and follow INSTALLATION.md instructions.")
            return

    def listener_callback(self, msg):
        self.get_logger().info('I heard: ' + str(msg.active_sessions)) # CHANGE

    def atl_python_code_executor(self):
        msg = PYTHONCODEEXECUTORSTATUS()
        msg.debug_level = atl_ide_debug_level
        msg.current_step = python_code_current_step
        self.PYTHONCODEEXECUTORSTATUS_status_publisher_.publish(msg)

    def callback_python_code_executor_runcode_service(self, request, response):
        self.get_logger().info("PE Service - target_bot: " + str(request.target_bot))
        self.get_logger().info("PE Service - remote_ip: " + str(request.remote_ip))
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
 #               self.get_logger().info(toExecute)
                #				self.start(toExecute)
                code = "import os\n" \
                       + "AtlDebugLevel = 0 \n" \
                       + toExecute \
                       + "\n" \
                       + "from rclpy.node import get_logger\n" \
                       + "get_logger('atl_ide_core').info('Es geht los!') \n" \
                       + "on_start()\n"
                self.get_logger().info("\n" + str(code))
                # run the python code as new thread
                global thread1
                thread1 = atlideThread(1, str(request.remote_ip),
                                       code, target = run_code(1, str(request.remote_ip), str(code)))  # TODO - add support for multiple remote IPs (clients)
                thread1.start()
                response.success = True
                self.get_logger().info('[Code Executor] Thread: ' + str(request.remote_ip) + " started")
            except Exception as e:
                response.success = False
                import traceback
                traceback.print_exc()
                raise e

        return response


def main(args=None):
    rclpy.init(args=args)
    node = atl_python_code_executor_node()
    rclpy.spin(node)
    rclpy.shutdown()


if __name__ == "__main__":
    main()
