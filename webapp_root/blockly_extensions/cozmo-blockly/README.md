# Cozmo Programming with Blockly

<a href="https://github.com/maxosprojects/cozmo-blockly/tree/master/gallery">Check out the gallery<br/><img src="https://github.com/maxosprojects/cozmo-blockly/raw/master/gallery/demo.jpg" width="400"/>
<img src="https://github.com/maxosprojects/cozmo-blockly/raw/master/gallery/3d.jpg" width="400"/></a>

## Features
All programming constructs are available to teach/learn basics of programming. 3D live visualization makes it a little more interesting. Cube rendering as any character (currently Minecraft mobs are supported) bumps interest even more. Physical interaction with objects and watching live how it is reflected in Cozmo's world should be even more engaging.

Currently with Cozmo you can do:
- basic actions (drive, turn, speak), the list will be extended with time
- "drive to coordinate" action
- add static objects (Cozmo will drive around them on "drive to coordinate" action)
- some animations
- cube tap events
- "cube been seen" condition
- "cube is visible" condition
- "distance to cube" statement for math or logical operators
- turning towards a cube
- setting lift height
- setting head angle
- picking up cubes
- placing cubes on the ground or on another cube
- enable "free will"

Improved security compared to Cozmo ScratchX extension:
- everything runs on your computer without third-party servers or scripts
- programs you save reside on your computer and have no links to third-party scripts in them - just plain Blockly XML programs

Some other features:
- can be rendered in a mobile browser and supports touch interaction (tested in iOS 10.2)
- 3D visualization of Cozmo and his environment - works in a desktop or mobile browser (tested in iOS 10.2)
- 3D visualization supports Anaglyph rendering - just toggle it and put on the red-cyan glasses and you're there, with Cozmo
- cubes in 3D visualization can be replaced with Minecraft mobs (and a couple of skins are available, see [examples](examples))
- static objects can be added (e.g. a wall) both to 3D visualization and to Cozmo world (Cozmo then plans path around it on "drive to coordinate" action)
- maze can be generated (each "maze" block generates maze only once and the maze is persisted with the program so the student can build a program to guide Cozmo through the maze)
- 3D visualization hides cubes that have not been observed since program start and makes cubes not visible at the moment semi-transparent
- view camera in the same browser tab (just another blockly tab) - available only when program is running
- program blocks (statements) are highlighted when being executed
- view your program translated into Python or XML AST

