#!/usr/bin/env python3
# TODO add atl header

import rclpy
from rclpy.node import Node
from atl_ide_interfaces.msg import ATLIDESESSIONMANAGER
from atl_ide_interfaces.srv import PYTHONCODEEXECUTOR #TODO: change code to payload

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
active_sessions = {} # client_ip : status / 0 = inactive / 1 = running / 2 = terminated
active_sessions = {'127.0.0.1' : 0}

class atl_ide_session_manager_node(Node):  # MODIFY NAME
    def __init__(self):
        super().__init__("atl_ide_session_manager_node")  # MODIFY NAME
        self.declare_parameter("webappserver_port", 8080)
        self.declare_parameter("atl_nodejs_install_dir",
                               '/home/autretechlab/Documents/GitHub/ATL_Robotics_IDE/webapp_root/nodejs/')
        self.declare_parameter("default_debug_level", 1)
        atl_ide_debug_level = self.get_parameter("default_debug_level").value


        self.atl_session_manager_publisher_ = self.create_publisher(ATLIDESESSIONMANAGER,
                                                                                "atl_session_manager_publisher",
                                                                                10)
        self.atl_session_manager_timer_ = self.create_timer(1.0, self.atl_session_manager_publisher)

        self.session_manager_service_ = self.create_service(PYTHONCODEEXECUTOR, "session_manager_service",
                                                                 self.callback_session_manager_service)
        self.get_logger().info("session_manager_service started")

    #     self.subscription = self.create_subscription(
    #         ATLIDESESSIONMANAGER,                                              # CHANGE
    #         'atl_session_manager_publisher',
    #         self.listener_callback,
    #         10)
    #     self.subscription
    #
    # def listener_callback(self, msg):
    #         self.get_logger().info('I heard: "%d"' % msg.num) # CHANGE

    def atl_session_manager_publisher(self):
        msg = ATLIDESESSIONMANAGER()
        msg.active_robots = ["thymio_v1" , "cozmo_v1"]
        global active_sessions
        msg.active_sessions = json.dumps(active_sessions)
        self.atl_session_manager_publisher_.publish(msg)

        # TODO Dictionary is supported by Python but not by ROS. Thus, one cannot
        # use a dictionary directly is a message
        # import json
        # encoded_data_string = json.dumps({dictionary})
        # loaded_dictionary = json.loads(encoded_data_string)


    def callback_session_manager_service(self, request, response):
        self.get_logger().info("PE Service - target_bot: " + str(request.target_bot))
        self.get_logger().info("PE Service - remote_ip: " + str(request.remote_ip))
        self.get_logger().info("PE Service - action: " + str(request.action))
        self.get_logger().info("PE Service - code: " + str(request.code))

        global active_sessions
        if request.action == "RUN":
            active_sessions[request.remote_ip] = 1
        elif request.action == "STOP":
            active_sessions[request.remote_ip] = 2
        elif request.action == "READY":
            active_sessions[request.remote_ip] = 0
        else:
            active_sessions[request.remote_ip] = 99
        return response



def main(args=None):
    rclpy.init(args=args)
    node = atl_ide_session_manager_node()
    rclpy.spin(node)
    rclpy.shutdown()


if __name__ == "__main__":
    main()