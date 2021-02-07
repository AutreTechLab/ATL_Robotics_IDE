from setuptools import setup

package_name = 'atl_ide_modules'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    # data_files=[
    #     ('share/ament_index/resource_index/packages',
    #         ['resource/' + package_name]),
    #     ('share/' + package_name, ['package.xml']),
    # ],
    package_dir={'atl_ide_modules': '.'},
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='autretechlab',
    maintainer_email='autretechlab@gmail.com',
    description='TODO: Package description',
    license='TODO: License declaration',
    tests_require=['pytest'],
)
