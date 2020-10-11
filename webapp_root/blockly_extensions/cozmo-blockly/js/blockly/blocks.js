/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Cozmo blocks for Blockly.
 * @author maxosprojects
 */
'use strict';

goog.provide('Blockly.Blocks.cozmo');
goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.cozmo.HUE = 210;
Blockly.Blocks.cozmo.HUE2 = 118;

/**
 * ATL: cube and custom marker images
 */

var cubes = {
  "1": {"src": "cozmo_blockly/img/thumbnails/cube1.png", "width": 13, "height": 11, "alt": "#1"},
  "2": {"src": "cozmo_blockly/img/thumbnails/cube2.png", "width": 13, "height": 11, "alt": "#2"},
  "3": {"src": "cozmo_blockly/img/thumbnails/cube3.png", "width": 13, "height": 11, "alt": "#3"},
  "4": {"src": "cozmo_blockly/img/thumbnails/SDK_2Circles.png", "width": 26, "height": 22, "alt": "2 Circles"},
  "5": {"src": "cozmo_blockly/img/thumbnails/SDK_2Diamonds.png", "width": 26, "height": 22, "alt": "2 Diamonds"},
  "6": {"src": "cozmo_blockly/img/thumbnails/SDK_2Hexagons.png", "width": 26, "height": 22, "alt": "2 Hexagons"},
  "7": {"src": "cozmo_blockly/img/thumbnails/SDK_2Triangles.png", "width": 26, "height": 22, "alt": "2 Triangles"},
  "8": {"src": "cozmo_blockly/img/thumbnails/SDK_3Circles.png", "width": 26, "height": 22, "alt": "3 Circles"},
  "9": {"src": "cozmo_blockly/img/thumbnails/SDK_3Diamonds.png", "width": 26, "height": 22, "alt": "3 Diamonds"},
  "10": {"src": "cozmo_blockly/img/thumbnails/SDK_3Hexagons.png", "width": 26, "height": 22, "alt": "3 Hexagons"},
  "11": {"src": "cozmo_blockly/img/thumbnails/SDK_3Triangles.png", "width": 26, "height": 22, "alt": "3 Triangles"},
  "12": {"src": "cozmo_blockly/img/thumbnails/SDK_4Circles.png", "width": 26, "height": 22, "alt": "4 Circles"},
  "13": {"src": "cozmo_blockly/img/thumbnails/SDK_4Diamonds.png", "width": 26, "height": 22, "alt": "4 Diamonds"},
  "14": {"src": "cozmo_blockly/img/thumbnails/SDK_4Hexagons.png", "width": 26, "height": 22, "alt": "4 Hexagons"},
  "15": {"src": "cozmo_blockly/img/thumbnails/SDK_4Triangles.png", "width": 26, "height": 22, "alt": "4 Triangles"},
  "16": {"src": "cozmo_blockly/img/thumbnails/SDK_5Circles.png", "width": 26, "height": 22, "alt": "5 Circles"},
  "17": {"src": "cozmo_blockly/img/thumbnails/SDK_5Diamonds.png", "width": 26, "height": 22, "alt": "5 Diamonds"},
  "18": {"src": "cozmo_blockly/img/thumbnails/SDK_5Hexagons.png", "width": 26, "height": 22, "alt": "5 Hexagons"},
  "19": {"src": "cozmo_blockly/img/thumbnails/SDK_5Triangles.png", "width": 26, "height": 22, "alt": "5 Triangles"}
};

// A hack to prevent rendering degree symbol as it is flaky.
// This is done to make it easy to upgrade blockly (keep it intact).
Blockly.FieldAngle.prototype.setText = function(text) {
  Blockly.FieldAngle.superClass_.setText.call(this, text);
  if (!this.textElement_) {
    // Not rendered yet.
    return;
  }
  this.updateGraph_();
  // // Insert degree symbol.
  // if (this.sourceBlock_.RTL) {
  //   this.textElement_.insertBefore(this.symbol_, this.textElement_.firstChild);
  // } else {
  //   this.textElement_.appendChild(this.symbol_);
  // }
  // Cached width is obsolete.  Clear it.
  this.size_.width = 0;
};

Blockly.Blocks['math_angle'] = {
  /**
   * Block for numeric angle value.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle('0'), 'NUM');
    this.appendDummyInput()
        .appendField("°");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('An angle.');
  }
};



Blockly.Blocks['cozmo_set_cube_model'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_SET_CUBE_MODEL_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MODEL",
          "options": [
            ["crate", "CRATE"],
            ["zombie", "ZOMBIE"],
            ["spiderman", "SPIDERMAN"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "colour": Blockly.Blocks.cozmo.HUE2,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};

Blockly.Blocks['cozmo_add_static_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_ADD_STATIC_MODEL_05)
        .appendField(new Blockly.FieldDropdown([
                      [Blockly.Msg.COZMO_ADD_STATIC_MODEL_01, "WALL_WOOD"],
                      [Blockly.Msg.COZMO_ADD_STATIC_MODEL_02, "WALL_BRICK"]
                     ]),
                     'MODEL');
    this.appendValueInput("X1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y1");
    this.appendValueInput("X2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x2");
    this.appendValueInput("Y2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y2");
    this.appendValueInput("DEPTH")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COZMO_ADD_STATIC_MODEL_03);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COZMO_ADD_STATIC_MODEL_04);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_ADD_STATIC_MODEL_01);
  }
};

Blockly.Blocks['cozmo_maze'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_MAZE_01);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_MAZE_02);

    if (typeof MazeGenerator !== "undefined" && typeof Code !== "undefined") {
      var staticObjects = [];
      var maze = new MazeGenerator(100, 100, 5, 5);
      maze.drawLoop();
      maze.renderMaze(function(x1, y1, x2, y2) {
          staticObjects.push({
            x1: x1 - 50,
            y1: y1 - 50,
            x2: x2 - 50,
            y2: y2 - 50
          });
        }
      );
      this.data = JSON.stringify(staticObjects);
    }
  }
};

Blockly.Blocks['cozmo_play_animation'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_PLAY_ANIMATION_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ANIMATION",
          "options": [
            [Blockly.Msg.COZMO_PLAY_ANIMATION_02, "GREETING"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_03, "SNEEZE"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_04, "WHAT"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_05, "WIN"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_06, "LOSE"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_07, "FACEPALM"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_08, "BEEPING"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_09, "NEW_OBJECT"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_10, "LOST_SOMETHING"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_11, "REJECT"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_12, "FAILED"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_13, "EXCITED_GREETING"],
            [Blockly.Msg.COZMO_PLAY_ANIMATION_14, "TALKY_GREETING"]
          ]
        }
      ],
      "colour": Blockly.Blocks.cozmo.HUE2,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};

Blockly.Blocks['cozmo_play_emotion'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_PLAY_EMOTION_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EMOTION",
          "options": [
            [Blockly.Msg.COZMO_PLAY_EMOTION_02, "AMAZED"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_03, "PLEASED"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_04, "HAPPY"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_05, "UPSET"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_06, "ANGRY"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_07, "BORED"],
            [Blockly.Msg.COZMO_PLAY_EMOTION_08, "STARTLED"]
          ]
        }
      ],
      "colour": Blockly.Blocks.cozmo.HUE2,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};

Blockly.Blocks['cozmo_lift'] = {
  init: function() {
    this.appendValueInput("LIFT")
        .setCheck("Number")
        .appendField(Blockly.Msg.COZMO_LIFT_01);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_LIFT_02);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_LIFT_03);
  }
};

Blockly.Blocks['cozmo_head'] = {
  init: function() {
    this.appendValueInput("HEAD")
        .setCheck("Number")
        .appendField(Blockly.Msg.COZMO_HEAD_01);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_HEAD_02);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_HEAD_03);
  }
};

Blockly.Blocks['cozmo_delay'] = {
  init: function() {
    this.appendValueInput("DELAY")
        .setCheck("Number")
        .appendField(Blockly.Msg.COZMO_DELAY_01);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DELAY_02);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_DELAY_03);
  }
};

Blockly.Blocks['cozmo_wait_for_tap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_WAIT_FOR_TAP_01);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_WAIT_FOR_TAP_02);
  }
};

Blockly.Blocks['cozmo_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_STOP_01);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_STOP_02);
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o4tb7h
Blockly.Blocks['cozmo_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_TURN_01);
    this.appendValueInput("ANGLE")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_TURN_02);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COZMO_TURN_03);
    this.setColour(Blockly.Blocks.cozmo.HUE);
  }
};

Blockly.Blocks['cozmo_drive_distance_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_DISTANCE_SPEED_01);
    this.appendValueInput("DISTANCE")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_DISTANCE_SPEED_02);
    this.appendValueInput("SPEED")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_DISTANCE_SPEED_03);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COZMO_DRIVE_DISTANCE_SPEED_04);
    this.setColour(Blockly.Blocks.cozmo.HUE);
  }
};

Blockly.Blocks['cozmo_drive_wheels_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_WHEELS_SPEED_01);
    this.appendValueInput("L_SPEED")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_WHEELS_SPEED_02);
    this.appendValueInput("R_SPEED")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_WHEELS_SPEED_03);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.cozmo.HUE);
    this.setTooltip(Blockly.Msg.COZMO_DRIVE_WHEELS_SPEED_04);
  }
};

Blockly.Blocks['cozmo_say'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(Blockly.Msg.COZMO_SAY_01);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COZMO_SAY_02);
    this.setColour(Blockly.Blocks.cozmo.HUE2);
  }
};

Blockly.Blocks['cozmo_goto_origin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_GOTO_ORIGIN_01);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COZMO_GOTO_ORIGIN_02);
    this.setColour(Blockly.Blocks.cozmo.HUE);
  }
};

Blockly.Blocks['cozmo_drive_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DRIVE_TO_01);
    this.appendValueInput("X")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField("Y:");
    this.appendValueInput("Y")
        .setCheck("Number")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COZMO_DRIVE_TO_02);
    this.setColour(Blockly.Blocks.cozmo.HUE);
  }
};

Blockly.Blocks['cozmo_control_backpack_lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set backpack lights to ")
        .appendField(new Blockly.FieldDropdown([["off","cozmo.lights.off_light"], ["Green","cozmo.lights.green_light"], ["Blue","cozmo.lights.blue_light"], ["White","cozmo.lights.white_light"], ["Red","cozmo.lights.red_light"]]), "BACKPACK_LIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control Cozmo's backpack lights and set them to different colors");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cozmo_control_cube_lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set cube lights to ")
        .appendField(new Blockly.FieldDropdown([["Red","cozmo.lights.red_light"], ["Green","cozmo.lights.green_light"], ["Blue","cozmo.lights.blue_light"]]), "CUBE_LIGHT")
        .appendField("for cube")
        .appendField(new Blockly.FieldDropdown([
                                                [cubes["1"], "1"],
                                                [cubes["2"], "2"],
                                                [cubes["3"], "3"]
                                               ]), "CUBE_NUM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control Cozmo's cube lights and set them to different colors");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['cozmo_cube_seen_number_boolean'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_SEEN_NUMBER_BOOLEAN_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_visible_number_boolean'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_VISIBLE_NUMBER_BOOLEAN_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};


Blockly.Blocks['cozmo_cube_distance_to'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_DISTANCE_TO_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "output": "Number",
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_distance_between'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_DISTANCE_BETWEEN_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE1_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "CUBE2_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "output": "Number",
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_pickup'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_PICKUP_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_place_on_ground'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_PLACE_ON_GROUND_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_place_on_cube'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_PLACE_ON_CUBE_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_cube_turn_toward'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_CUBE_TURN_TOWARD_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_on_cube_tapped'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.COZMO_ON_CUBE_TAPPED_01);
    this.appendStatementInput("BODY");
    this.setColour(Blockly.Blocks.cozmo.HUE2);
    this.setTooltip(Blockly.Msg.COZMO_ON_CUBE_TAPPED_02);
  }
};

Blockly.Blocks['cozmo_tapped_cube_number_boolean'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_TAPPED_CUBE_NUMBER_BOOLEAN_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CUBE_NUM",
          "options": [
            [cubes["1"], "1"],
            [cubes["2"], "2"],
            [cubes["3"], "3"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.cozmo.HUE2,
    });
  }
};

Blockly.Blocks['cozmo_free_will'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COZMO_FREE_WILL_01,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FREE_WILL",
          "options": [
            ["Enable", "True"],
            ["Disable", "False"]
          ]
        }
      ],
      "colour": Blockly.Blocks.cozmo.HUE2,
      "previousStatement": null,
      "nextStatement": null,
    });
  }
};

// ATL Custom Objects
/**
  define a unique cube (<CUBE_DIMENSION> mm x <CUBE_DIMENSION> mm x <CUBE_DIMENSION> mm)
  with a <MARKER_DIMENSION> mm x <MARKER_DIMENSION> mm <CUSTOM_MARKER> image on every face
**/

Blockly.Blocks['cozmo_define_custom_cube'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_CUBE_01)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_CUBE_02)
        .appendField(new Blockly.FieldDropdown([
                                                    ["00","CustomObjectTypes.CustomType00"],
                                                    ["01","CustomObjectTypes.CustomType01"],
                                                    ["02","CustomObjectTypes.CustomType02"],
                                                    ["03","CustomObjectTypes.CustomType03"],
                                                    ["04","CustomObjectTypes.CustomType04"],
                                                    ["05","CustomObjectTypes.CustomType05"],
                                                    ["06","CustomObjectTypes.CustomType06"],
                                                    ["07","CustomObjectTypes.CustomType07"],
                                                    ["08","CustomObjectTypes.CustomType08"],
                                                    ["09","CustomObjectTypes.CustomType09"],
                                                    ["10","CustomObjectTypes.CustomType10"],
                                                    ["11","CustomObjectTypes.CustomType11"],
                                                    ["12","CustomObjectTypes.CustomType12"],
                                                    ["13","CustomObjectTypes.CustomType13"],
                                                    ["14","CustomObjectTypes.CustomType14"],
                                                    ["15","CustomObjectTypes.CustomType15"],
                                                    ["16","CustomObjectTypes.CustomType16"],
                                                    ["17","CustomObjectTypes.CustomType17"],
                                                    ["18","CustomObjectTypes.CustomType18"],
                                                    ["19","CustomObjectTypes.CustomType19"]
                                                ]), "CUSTOM_TYPE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_CUBE_03)
        .appendField(new Blockly.FieldNumber(0), "CUBE_DIMENSION")
        .appendField("mm");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_CUBE_04)
        .appendField(new Blockly.FieldNumber(0), "MARKER_DIMENSION")
        .appendField("mm");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip(Blockly.Msg.COZMO_DEFINE_CUSTOM_CUBE_05);
 this.setHelpUrl("");
  }
};

/**
 define a unique wall (<WALL_X_DIMENSION> mm x <WALL_Y_DIMENSION> mm (x10mm thick for all walls) with a <MARKER_DIMENSION> mm x <MARKER_DIMENSION> mm <CUSTOM_MARKER> image on every face
**/

Blockly.Blocks['cozmo_define_custom_wall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_01)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_02)
        .appendField(new Blockly.FieldDropdown([
                                                    ["00","CustomObjectTypes.CustomType00"],
                                                    ["01","CustomObjectTypes.CustomType01"],
                                                    ["02","CustomObjectTypes.CustomType02"],
                                                    ["03","CustomObjectTypes.CustomType03"],
                                                    ["04","CustomObjectTypes.CustomType04"],
                                                    ["05","CustomObjectTypes.CustomType05"],
                                                    ["06","CustomObjectTypes.CustomType06"],
                                                    ["07","CustomObjectTypes.CustomType07"],
                                                    ["08","CustomObjectTypes.CustomType08"],
                                                    ["09","CustomObjectTypes.CustomType09"],
                                                    ["10","CustomObjectTypes.CustomType10"],
                                                    ["11","CustomObjectTypes.CustomType11"],
                                                    ["12","CustomObjectTypes.CustomType12"],
                                                    ["13","CustomObjectTypes.CustomType13"],
                                                    ["14","CustomObjectTypes.CustomType14"],
                                                    ["15","CustomObjectTypes.CustomType15"],
                                                    ["16","CustomObjectTypes.CustomType16"],
                                                    ["17","CustomObjectTypes.CustomType17"],
                                                    ["18","CustomObjectTypes.CustomType18"],
                                                    ["19","CustomObjectTypes.CustomType19"]
                                                ]), "CUSTOM_TYPE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_03)
        .appendField(new Blockly.FieldNumber(0), "WALL_X_DIMENSION")
        .appendField("mm")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_04)
        .appendField(new Blockly.FieldNumber(0), "WALL_Y_DIMENSION")
        .appendField("mm");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_05)
        .appendField(new Blockly.FieldNumber(0), "MARKER_DIMENSION")
        .appendField("mm");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip(Blockly.Msg.COZMO_DEFINE_CUSTOM_WALL_06);
 this.setHelpUrl("");
  }
};

/**

 define a unique wall (<WALL_X_DIMENSION> mm x <WALL_Y_DIMENSION> mm (x10mm thick for all walls)
  with a <MARKER_DIMENSION> mm x <MARKER_DIMENSION> mm <CUSTOM_MARKER> image on every face

define a unique box (60mm deep x 140mm width x100mm tall) with a different 30mm x 50mm image on each of the 6 faces

**/

Blockly.Blocks['cozmo_define_custom_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_00)
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_01);
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_02)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_1")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_03)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_2")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_04)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_3")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_05)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_4")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_06)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_5")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_07)
        .appendField(new Blockly.FieldDropdown([
                                                    [cubes["4"],"CustomObjectMarkers.Circles2"],
                                                    [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                                    [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                                    [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                                    [cubes["8"],"CustomObjectMarkers.Circles3"],
                                                    [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                                    [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                                    [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                                    [cubes["12"],"CustomObjectMarkers.Circles4"],
                                                    [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                                    [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                                    [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                                    [cubes["16"],"CustomObjectMarkers.Circles5"],
                                                    [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                                    [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                                    [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "CUSTOM_MARKER_FACE_6")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_08)
        .appendField(new Blockly.FieldDropdown([
                                                    ["00","CustomObjectTypes.CustomType00"],
                                                    ["01","CustomObjectTypes.CustomType01"],
                                                    ["02","CustomObjectTypes.CustomType02"],
                                                    ["03","CustomObjectTypes.CustomType03"],
                                                    ["04","CustomObjectTypes.CustomType04"],
                                                    ["05","CustomObjectTypes.CustomType05"],
                                                    ["06","CustomObjectTypes.CustomType06"],
                                                    ["07","CustomObjectTypes.CustomType07"],
                                                    ["08","CustomObjectTypes.CustomType08"],
                                                    ["09","CustomObjectTypes.CustomType09"],
                                                    ["10","CustomObjectTypes.CustomType10"],
                                                    ["11","CustomObjectTypes.CustomType11"],
                                                    ["12","CustomObjectTypes.CustomType12"],
                                                    ["13","CustomObjectTypes.CustomType13"],
                                                    ["14","CustomObjectTypes.CustomType14"],
                                                    ["15","CustomObjectTypes.CustomType15"],
                                                    ["16","CustomObjectTypes.CustomType16"],
                                                    ["17","CustomObjectTypes.CustomType17"],
                                                    ["18","CustomObjectTypes.CustomType18"],
                                                    ["19","CustomObjectTypes.CustomType19"]
                                                ]), "CUSTOM_TYPE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_09)
        .appendField(new Blockly.FieldNumber(0), "WALL_DEEP_DIMENSION")
        .appendField("mm")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_10)
        .appendField(new Blockly.FieldNumber(0), "WALL_WITH_DIMENSION")
        .appendField("mm")
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_11)
        .appendField(new Blockly.FieldNumber(0), "WALL_TALL_DIMENSION")
        .appendField("mm");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_12)
        .appendField(new Blockly.FieldNumber(0), "MARKER_DIMENSION")
        .appendField("mm");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip(Blockly.Msg.COZMO_DEFINE_CUSTOM_BOX_13);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cozmo_wait_for_custom_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_WAIT_FOR_CUSTOM_OBJECT_01);
    this.setInputsInline(true);
 //   this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cozmo_object_visible_number_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_OBJECT_VISIBLE_NUMBER_BOOLEAN_01);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
                                            [cubes["4"],"CustomObjectMarkers.Circles2"],
                                            [cubes["5"],"CustomObjectMarkers.Diamonds2"],
                                            [cubes["6"],"CustomObjectMarkers.Hexagons2"],
                                            [cubes["7"],"CustomObjectMarkers.Triangles2"],
                                            [cubes["8"],"CustomObjectMarkers.Circles3"],
                                            [cubes["9"],"CustomObjectMarkers.Diamonds3"],
                                            [cubes["10"],"CustomObjectMarkers.Hexagons3"],
                                            [cubes["11"],"CustomObjectMarkers.Triangles3"],
                                            [cubes["12"],"CustomObjectMarkers.Circles4"],
                                            [cubes["13"],"CustomObjectMarkers.Diamonds4"],
                                            [cubes["14"],"CustomObjectMarkers.Hexagons4"],
                                            [cubes["15"],"CustomObjectMarkers.Triangles4"],
                                            [cubes["16"],"CustomObjectMarkers.Circles5"],
                                            [cubes["17"],"CustomObjectMarkers.Diamonds5"],
                                            [cubes["18"],"CustomObjectMarkers.Hexagons5"],
                                            [cubes["19"],"CustomObjectMarkers.Triangles5"]
                                                ]), "OBJECT_NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.COZMO_OBJECT_VISIBLE_NUMBER_BOOLEAN_02);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip(Blockly.Msg.COZMO_OBJECT_VISIBLE_NUMBER_BOOLEAN_03);
 this.setHelpUrl("");
  }
};
