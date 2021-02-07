/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for thymio blocks.
 * @author AutreTechLab
 */
'use strict';

goog.provide('Blockly.Python.thymio');

goog.require('Blockly.Python');

Blockly.Python['thymio_initialize'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thymio_event_button'] = function(block) {
  var dropdown_button = block.getFieldValue('BUTTON');
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_handler = Blockly.Python.statementToCode(block, 'HANDLER');
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  for (var i = 0, varName; varName = block.workspace.variableList[i]; i++) {
    globals.push(Blockly.Python.variableDB_.getName(varName,
      Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  var branch = Blockly.Python.statementToCode(block, 'BODY');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'def thymio_event_button(evt, *, obj, tap_count, tap_duration, tap_intensity, **kwargs):\n' + globals + Blockly.Python.INDENT + 'tapped_cube = obj\n' + branch;
  return code;
};

Blockly.Python['thymio_event_prox'] = function(block) {
  var dropdown_sensor = block.getFieldValue('SENSOR');
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_handler = Blockly.Python.statementToCode(block, 'HANDLER');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thymio_event_prox_ground'] = function(block) {
  var dropdown_sensor = block.getFieldValue('SENSOR');
  var dropdown_mode = block.getFieldValue('MODE');
  var statements_handler = Blockly.Python.statementToCode(block, 'HANDLER');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thymio_event_shock'] = function(block) {
  var statements_handler = Blockly.Python.statementToCode(block, 'HANDLER');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thymio_led'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var colour_led_rgb_color = block.getFieldValue('LED_RGB_COLOR');
  // TODO: Assemble Python into code variable.
  var hex = colour_led_rgb_color; //hex of 10
  var thymio_colour_led_rgb_color = hex.split("");
  var thymio_colour_led_r = thymio_colour_led_rgb_color[1] + thymio_colour_led_rgb_color[2];
  thymio_colour_led_r = parseInt(thymio_colour_led_r,16);
  thymio_colour_led_r = parseInt(thymio_colour_led_r / 255 * 32);

  var thymio_colour_led_g = thymio_colour_led_rgb_color[3] + thymio_colour_led_rgb_color[4];
  thymio_colour_led_g = parseInt(thymio_colour_led_g,16);
  thymio_colour_led_g = parseInt(thymio_colour_led_g / 255 * 32);

  var thymio_colour_led_b = thymio_colour_led_rgb_color[5] + thymio_colour_led_rgb_color[6];
  thymio_colour_led_b = parseInt(thymio_colour_led_b,16);
  thymio_colour_led_b = parseInt(thymio_colour_led_b / 255 * 32);

  var code = "(" + thymio_colour_led_r + "," + thymio_colour_led_g + "," +thymio_colour_led_b +")";
  return code;
};

Blockly.Python['thymio_drive_cm'] = function(block) {
  var number_distance = block.getFieldValue('DISTANCE');
  var number_speed = block.getFieldValue('SPEED');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thymio_actuator_timer'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

