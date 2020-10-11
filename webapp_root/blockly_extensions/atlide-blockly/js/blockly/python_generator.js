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

goog.provide('Blockly.Python.atl');

goog.require('Blockly.Python');

Blockly.Python['cozmo_on_start'] = function(block) {
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  globals.push("AtlDebugLevel");
  for (var i = 0, varName; varName = block.workspace.variableList[i]; i++) {
    globals.push(Blockly.Python.variableDB_.getName(varName,
      Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  var branch = Blockly.Python.statementToCode(block, 'BODY');
  var dropdown_debug_level = block.getFieldValue('DEBUG_LEVEL');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'def on_start():\n' + globals + '  AtlDebugLevel = '+ dropdown_debug_level + '  # Defining the delay between blocks in seconds'+ '\n' + branch +'\n';
  return code;
};

Blockly.Python['atl_shuffle_the_list'] = function(block) {
  var value_atl_list = Blockly.Python.valueToCode(block, 'ATL_LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
   Blockly.Python.definitions_['import_random'] = 'import random';
  var code = 'random.shuffle('+value_atl_list+')\n';
  return code;
};

Blockly.Python['atl_comment'] = function(block) {
  var value_atl_comment_in_code_text = Blockly.Python.valueToCode(block, 'ATL_COMMENT_IN_CODE_TEXT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '#' + value_atl_comment_in_code_text + "\n";
  return code;
};

Blockly.Python['atl_print'] = function(block) {
  var value_atl_print = Blockly.Python.valueToCode(block, 'ATL_PRINT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_atl_print + ')\nbot.consoleLog(' + value_atl_print + ')\n';
  return code;
};

Blockly.Python['atl_logo'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};