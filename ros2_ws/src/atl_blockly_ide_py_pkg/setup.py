from setuptools import setup

package_name = 'atl_blockly_ide_py_pkg'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='autretechlab',
    maintainer_email='autretechlab@gmail.com',
    description='TODO: Package description',
    license='TODO: License declaration',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            "atl_ide_webappserver_node = atl_blockly_ide_py_pkg.atl_ide_webappserver_node:main",
            "atl_ide_python_code_executor_node = atl_blockly_ide_py_pkg.atl_python_code_executor_node:main"
        ],
    },
)
