# Test python script to communicate with IDE

#!/usr/bin/python

import threading
import time
import tornado.web
import tornado.websocket
from ws4py.client.threadedclient import WebSocketClient

exitFlag = 0

class myThread (threading.Thread):
   def __init__(self, threadID, name, counter):
      threading.Thread.__init__(self)
      self.threadID = threadID
      self.name = name
      self.counter = counter
   def run(self):
      print("Starting " + self.name)
      print_time(self.name, 5, self.counter)
      print("Exiting " + self.name)

def print_time(threadName, counter, delay):
   while counter:
      if exitFlag:
         threadName.exit()
      time.sleep(delay)
      print("%s: %s" % (threadName, time.ctime(time.time())))
      counter -= 1


class AtlIdeThread(myThread):
	def __init__(self, threadID, name, counter, code):
		myThread.__init__(self, threadID, name, counter)
		self._robot = None
		self._origin = None
		self._dataPubThread = None
		self._camClient = None
		self._wsClient = None
		self._consoleClient = None
		self._blocksClient = None
#		self._aruco = aruco

	def start(self):
        # Web Sockets
		# self._camClient = WebSocketClient('ws://localhost:8080/camPub')
		# self._camClient.connect()

		self._wsClient = WebSocketClient('ws://localhost:8080/WsPub')
		self._wsClient.connect()

		# self._consoleClient = WebSocketClient('ws://localhost:8080/consolePub')
		# self._consoleClient.connect()
		#
		# self._cozmo_messagesClient = WebSocketClient('ws://localhost:8080/cozmo_messagesPub')
		# self._cozmo_messagesClient.connect()

		self._blocksClient = WebSocketClient('ws://localhost:8080/blocksPub')
		self._blocksClient.connect()

	def consoleLog(self, msgdata):
		self._consoleClient.send(msgdata)

	def cozmo_messagesLog(self, msgdata):
		self._cozmo_messagesClient.send(msgdata)

	def highlight(self, block, AtlDebugLevel):
		self._blocksClient.send(block)
		print("Highlighting active block " + str(block) + " in " + self.name)
		if AtlDebugLevel == 1:
			time.sleep(1)
		if AtlDebugLevel == 2:
			time.sleep(2)
		if AtlDebugLevel == 3:
			print(block, AtlDebugLevel)
			time.sleep(5)

	def run(self):
		print("Starting " + self.name)
		self.highlight('yq[d`,)DovSfZr-agD8?',0)
		print_time(self.name, 5, self.counter)
		print("Exiting " + self.name)

# Create new threads
thread1 = AtlIdeThread(1, "ATLIDE", 3, 'print("LALALAL")')
thread2 = myThread(2, "Thread-2", 2)

# Start new Threads
thread1.start()
thread2.start()
thread1.run()

print("Exiting Main Thread")