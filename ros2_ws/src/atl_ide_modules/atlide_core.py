# Autre TechLab - Core functionality for the Blockly and Ros2

import rclpy
from rclpy.node import Node
import os
import time

from ws4py.client.threadedclient import WebSocketClient
#
blocksClient = WebSocketClient('ws://localhost:8080/blocksPub')
blocksClient.connect()

def start(port=8080):
	blocksClient = WebSocketClient('ws://localhost:' + str(port)+ '/blocksPub')
	blocksClient.connect()


def highlight(block, AtlDebugLevel = 0):  #defined in ../atlide-blockly/js/code.js and ../nodejs/headless.js
	try:
		blocksClient.send(block)
	except:
		get_logger("atlide_core.highlight").info("Ups, cannot send message!!")
		pass
	from rclpy.node import get_logger
	get_logger("atlide_core.highlight").info(str(block) + " " + str(AtlDebugLevel))
	if AtlDebugLevel == 1:
		time.sleep(1)
	if AtlDebugLevel == 2:
		time.sleep(2)
	if AtlDebugLevel == 3:
		time.sleep(5)

class ideWsBlocks(Node):
	def __init__(self):
		super().__init__("ideWsBlocks")  # MODIFY NAME
		from ws4py.client.threadedclient import WebSocketClient
		self._wsClient = None
		self._blocksClient = None

# 		self._blocksClient = WebSocketClient('ws://192.168.1.44:8080/blocksPub')
# #		self._blocksClient.connect()