# AutreTechLAB - Launch file for Webserver, Session Manager and Code Executor
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
