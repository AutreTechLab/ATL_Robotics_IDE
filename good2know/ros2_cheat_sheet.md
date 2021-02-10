# Package Creation (Python)
* `ros2 pkg create --build-type ament_python <package_name>`

# Package Build: colcon - collective construction
* `colcon build`
* `colcon build --packages-select my_package`

# Running Package
* `ros2 run my_package my_node`

# Monitoring 
* `ros2 topic list `
* `ros2 topic echo <topic>`

# Troubleshooting 
* `rqt` -> `Menu: Plugins -> Introspection -> Node Graph `