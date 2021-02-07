#!/usr/bin/env python

# Copyright 1996-2019 Cyberbotics Ltd.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Launch Webots and the controller."""

# AutreTechLAB - Launch file for webots and Cozmo_V1 ros2 controller
# autretechlab@gmail.com

import os
from launch import LaunchDescription
from launch_ros.actions import Node

from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    # Webapp server node
    ld = LaunchDescription()

    remap_number_topic = ("number", "my_number")

    atl_ide_webappserver_node = Node(
        package="atl_blockly_ide_py_pkg",
        executable="atl_ide_webappserver_node",
        # name="my_number_publisher",
        # remappings=[
        #     remap_number_topic
        # ],
        parameters=[
            {"webapp_port": 8080},
            {"atl_IDE_webappserver_install_dir":
                 os.path.join(get_package_share_directory('ide_bringup'),
                              '../../../../..',
                              'webapp_root/')}
        ]
    )

    atl_ide_python_code_executor_node = Node(
        package="atl_blockly_ide_py_pkg",
        executable="atl_ide_python_code_executor_node",
        # name="my_number_publisher",
        # remappings=[
        #     remap_number_topic
        # ],
        parameters=[
            {"number_to_publish": 4}
        ]
    )

    atl_ide_session_manager_node = Node(
        package="atl_blockly_ide_py_pkg",
        executable="atl_ide_session_manager_node",
        # name="my_number_publisher",
        # remappings=[
        #     remap_number_topic
        # ],
        parameters=[
            {"number_to_publish": 4}
        ]
    )

    ld.add_action(atl_ide_webappserver_node)
    ld.add_action(atl_ide_python_code_executor_node)
    ld.add_action(atl_ide_session_manager_node)
    return ld
