import sys
import os
print("Got arguments: ", sys.argv)
os. system('cd /home/ubuntu/ATL_Robotics_IDE/ros2_ws')
os. system('. /home/ubuntu/ATL_Robotics_IDE/ros2_ws/env.bash')
os. system('ros2 node list')
