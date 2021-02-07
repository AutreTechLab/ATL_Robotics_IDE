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
 * @fileoverview Generating Python for thymio blocks.
 * @author AutreTechLab
 */

'use strict';

goog.provide('Blockly.Blocks.thymio');
goog.require('Blockly.Blocks');

Blockly.Blocks['thymio_initialize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://localhost:9090/static/thymio.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(Blockly.Msg.THYMIO_ON_START_01);
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thymio_event_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.THYMIO_EVENT_BUTTON_01)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.THYMIO_EVENT_BUTTON_CENTER_01,"button.center"], [Blockly.Msg.THYMIO_EVENT_BUTTON_FORWARD_01,"button.forward"], [Blockly.Msg.THYMIO_EVENT_BUTTON_BACKWARD_01,"button.backward"], [Blockly.Msg.THYMIO_EVENT_BUTTON_LEFT_01,"button.left"], [Blockly.Msg.THYMIO_EVENT_BUTTON_RIGHT_01,"button.right"]]), "BUTTON")
        .appendField(Blockly.Msg.THYMIO_EVENT_BUTTON_02)
        .appendField(new Blockly.FieldDropdown([["option",Blockly.Msg.THYMIO_EVENT_BUTTON_PRESS_01], ["option",Blockly.Msg.THYMIO_EVENT_BUTTON_RELEASE_01 ]]), "MODE");
    this.appendStatementInput("HANDLER")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip(Blockly.Msg.THYMIO_EVENT_BUTTON_TOOLTIP_01);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thymio_event_prox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.THYMIO_EVENT_PROX_01)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.THYMIO_EVENT_PROX_FRONT_LEFT_01,"prox.horizontal[0]"], [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_LEFT_MIDDLE_01,"prox.horizontal[1]"], [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_MIDDLE_01,"prox.horizontal[2]"], [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_RIGHT_MIDDLE_01,"prox.horizontal[3]"], [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_RIGHT_01,"prox.horizontal[4]"], [Blockly.Msg.THYMIO_EVENT_PROX_REAR_LEFT_01,"prox.horizontal[5]"], [Blockly.Msg.THYMIO_EVENT_PROX_REAR_RIGHT_01,"prox.horizontal[6]"]]), "SENSOR")
        .appendField("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.THYMIO_EVENT_PROX_PROX_01,"PROX"], [Blockly.Msg.THYMIO_EVENT_PROX_NOPROX_01,"NOPROX"]]), "MODE");
    this.appendStatementInput("HANDLER")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['thymio_event_prox_ground'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.THYMIO_EVENT_PROX_GROUND_01)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_LEFT_01,"prox.ground.delta[0]"], [Blockly.Msg.THYMIO_EVENT_PROX_GROUND_RIGHT_01 ,"prox.ground.delta[1]"]]), "SENSOR")
        .appendField(Blockly.Msg.THYMIO_EVENT_PROX_GROUND_02)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_BLACK_01,"BLACK"], [Blockly.Msg.THYMIO_EVENT_PROX_GROUND_WHITE_01,"WHITE"], [Blockly.Msg.THYMIO_EVENT_PROX_GROUND_PROX_01,"PROX"], [Blockly.Msg.THYMIO_EVENT_PROX_GROUND_NOPROX_01 ,"NOPROX"]]), "MODE");
    this.appendStatementInput("HANDLER")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thymio_event_shock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("THYMIO_EVENT_SHOCK");
    this.appendStatementInput("HANDLER")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['thymio_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["THYMIO_LED_RGB_TOP","leds.top"], ["THYMIO_LED_RGB_BOTTOM_LEFT","leds.bottom.left"], ["LED_RGB_BOTTOM_RIGHT","leds.bottom.right"]]), "NAME")
        .appendField("LED to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "LED_RGB_COLOR");
    this.setInputsInline(true);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thymio_drive_cm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://localhost:9090/static/thymio.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("THYMIO_DRIVE_CM")
        .appendField(new Blockly.FieldNumber(0, 0), "DISTANCE")
        .appendField("at speed")
        .appendField(new Blockly.FieldNumber(0, -500, 500), "SPEED");
    this.setInputsInline(true);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thymio_actuator_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blockly.Msg.THYMIO_ACTUATOR_TIMER_01")
        .appendField(new Blockly.FieldDropdown([["option","FIRST"], ["option","SECOND"]]), "NAME")
        .appendField("Blockly.Msg.THYMIO_ACTUATOR_TIMER_02")
        .appendField(new Blockly.FieldNumber(1000), "NAME")
        .appendField("Blockly.Msg.THYMIO_ACTUATOR_TIMER_03");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

