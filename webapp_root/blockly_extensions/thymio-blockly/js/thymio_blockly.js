'use strict';

goog.provide('Blockly.Blocks.thymio');

goog.require('Blockly.Blocks');

alert("Hello! I am an alert box!!");

Blockly.Blocks.cozmo.HUE = 210;
Blockly.Blocks.cozmo.HUE2 = 118;

Blockly.Blocks['thymio_event_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on")
        .appendField(new Blockly.FieldDropdown([["option","THYMIO_EVENT_BUTTON_CENTER"], ["option","THYMIO_EVENT_BUTTON_FORWARD"], ["option","THYMIO_EVENT_BUTTON_BACKWARD"], ["option","THYMIO_EVENT_BUTTON_LEFT"], ["option","THYMIO_EVENT_BUTTON_RIGHT"]]), "BUTTON")
        .appendField("button")
        .appendField(new Blockly.FieldDropdown([["option","THYMIO_EVENT_BUTTON_PRESS"], ["option","THYMIO_EVENT_BUTTON_RELEASE"]]), "MODE");
    this.appendStatementInput("HANDLER")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/**
Blockly.Blocks.thymio_event_prox={
    init:function(){
        this.jsonInit({
            message0:Blockly.Msg.THYMIO_EVENT_PROX,args0:[{
                type:"field_dropdown",
                name:"SENSOR",
                options:[[Blockly.Msg.THYMIO_EVENT_PROX_FRONT_LEFT,"prox.horizontal[0]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_LEFT_MIDDLE,"prox.horizontal[1]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_MIDDLE,"prox.horizontal[2]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_RIGHT_MIDDLE,"prox.horizontal[3]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_FRONT_RIGHT,"prox.horizontal[4]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_REAR_LEFT,"prox.horizontal[5]"],
                [Blockly.Msg.THYMIO_EVENT_PROX_REAR_RIGHT,"prox.horizontal[6]"]]
                },
                {
                type:"field_dropdown",
                name:"MODE",
                options:[[Blockly.Msg.THYMIO_EVENT_PROX_PROX,"PROX"],
                [Blockly.Msg.THYMIO_EVENT_PROX_NOPROX,"NOPROX"]]
                }]
                });
                this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
                this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_PROX_HELPURL);
                this.setTooltip(Blockly.Msg.THYMIO_EVENT_PROX_TOOLTIP);
                this.appendStatementInput("HANDLER")
     }
 };

{
  "type": "thymio_event_button",
  "message0": "on %1 %2 %3 button %4 %5 %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ],
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['thymio_event_button'] = {
    init: function() {
      this.jsonInit({
        message0:Blockly.Msg.THYMIO_EVENT_BUTTON,
        args0:[{
            type:"field_dropdown",
            name:"BUTTON",
            options:[[Blockly.Msg.THYMIO_EVENT_BUTTON_CENTER,"button.center"],
            [Blockly.Msg.THYMIO_EVENT_BUTTON_FORWARD,"button.forward"],
            [Blockly.Msg.THYMIO_EVENT_BUTTON_BACKWARD,"button.backward"],
            [Blockly.Msg.THYMIO_EVENT_BUTTON_LEFT,"button.left"],
            [Blockly.Msg.THYMIO_EVENT_BUTTON_RIGHT,"button.right"]]},
            {type:"field_dropdown",
            name:"MODE",
            options:[[Blockly.Msg.THYMIO_EVENT_BUTTON_PRESS,"PRESS"],
            [Blockly.Msg.THYMIO_EVENT_BUTTON_RELEASE,"RELEASE"]]}]});
            this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);
            this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_BUTTON_HELPURL);
            this.setTooltip(Blockly.Msg.THYMIO_EVENT_BUTTON_TOOLTIP);
            this.appendStatementInput("HANDLER")}
 };

 /**
Blockly.Blocks.thymio_event_prox_ground={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_EVENT_PROX_GROUND,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_LEFT,"prox.ground.delta[0]"],[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_RIGHT,"prox.ground.delta[1]"]]},{type:"field_dropdown",name:"MODE",options:[[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_BLACK,"BLACK"],[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_WHITE,"WHITE"],[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_PROX,
"PROX"],[Blockly.Msg.THYMIO_EVENT_PROX_GROUND_NOPROX,"NOPROX"]]}]});this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_PROX_GROUND_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_EVENT_PROX_GROUND_TOOLTIP);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_event_shock={init:function(){this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_SHOCK_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_EVENT_SHOCK_TOOLTIP);this.appendDummyInput().appendField(Blockly.Msg.THYMIO_EVENT_SHOCK);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_event_timer={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_EVENT_TIMER,args0:[{type:"field_dropdown",name:"EVENT",options:[[Blockly.Msg.THYMIO_EVENT_TIMER_FIRST,"timer0"],[Blockly.Msg.THYMIO_EVENT_TIMER_SECOND,"timer1"]]}]});this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_TIMER_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_EVENT_TIMER_TOOLTIP);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_event_sound={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_EVENT_SOUND,args0:[{type:"field_dropdown",name:"EVENT",options:[[Blockly.Msg.THYMIO_EVENT_SOUND_MIC,"mic"],[Blockly.Msg.THYMIO_EVENT_SOUND_FINISHED,"sound.finished"]]}]});this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_SOUND_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_EVENT_SOUND_TOOLTIP);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_event_receive={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_EVENT_RECEIVE,args0:[{type:"field_dropdown",name:"EVENT",options:[[Blockly.Msg.THYMIO_EVENT_RECEIVE_COMM,"prox.comm"],[Blockly.Msg.THYMIO_EVENT_RECEIVE_RC,"rc5"]]}]});this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_RECEIVE_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_EVENT_RECEIVE_TOOLTIP);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_event_update={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_EVENT_UPDATE,args0:[{type:"field_dropdown",name:"EVENT",options:[[Blockly.Msg.THYMIO_EVENT_UPDATE_BUTTONS,"buttons"],[Blockly.Msg.THYMIO_EVENT_UPDATE_PROX,"prox"],[Blockly.Msg.THYMIO_EVENT_UPDATE_TEMPERATURE,"temperature"],[Blockly.Msg.THYMIO_EVENT_UPDATE_ACC,"acc"],[Blockly.Msg.THYMIO_EVENT_UPDATE_MOTOR,"motor"]]}]});this.setColour(Blockly.Blocks.thymio.EVENTS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_EVENT_UPDATED_HELPURL);
this.setTooltip(Blockly.Msg.THYMIO_EVENT_UPDATED_TOOLTIP);this.appendStatementInput("HANDLER")}};
Blockly.Blocks.thymio_led={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED,args0:[{type:"field_dropdown",name:"LED",options:[[Blockly.Msg.THYMIO_LED_TOP,"leds.top"],[Blockly.Msg.THYMIO_LED_BOTTOM_LEFT,"leds.bottom.left"],[Blockly.Msg.THYMIO_LED_BOTTOM_RIGHT,"leds.bottom.right"]]},{type:"field_colour",name:"COLOR",colour:"#ff0000"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_TOOLTIP);this.setPreviousStatement(!0);
this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_rgb={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_RGB,args0:[{type:"field_dropdown",name:"LED",options:[[Blockly.Msg.THYMIO_LED_RGB_TOP,"leds.top"],[Blockly.Msg.THYMIO_LED_RGB_BOTTOM_LEFT,"leds.bottom.left"],[Blockly.Msg.THYMIO_LED_RGB_BOTTOM_RIGHT,"leds.bottom.right"]]},{type:"input_value",name:"RED",check:"Number",align:"RIGHT"},{type:"input_value",name:"GREEN",check:"Number",align:"RIGHT"},{type:"input_value",name:"BLUE",check:"Number",align:"RIGHT"}]});
this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_RGB_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_RGB_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_circle={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_CIRCLE,args0:[{type:"input_value",name:"CIRCLE0",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE1",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE2",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE3",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE4",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE5",check:"Number",align:"RIGHT"},
{type:"input_value",name:"CIRCLE6",check:"Number",align:"RIGHT"},{type:"input_value",name:"CIRCLE7",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_CIRCLE_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_CIRCLE_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_prox={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_PROX,args0:[{type:"input_value",name:"PROX0",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX1",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX2",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX3",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX4",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX5",check:"Number",align:"RIGHT"},{type:"input_value",
name:"PROX6",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX7",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_PROX_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_PROX_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_prox_ground={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_PROX_GROUND,args0:[{type:"input_value",name:"PROX0",check:"Number",align:"RIGHT"},{type:"input_value",name:"PROX1",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_PROX_GROUND_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_PROX_GROUND_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_button={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_BUTTON,args0:[{type:"input_value",name:"FORWARD",check:"Number",align:"RIGHT"},{type:"input_value",name:"RIGHT",check:"Number",align:"RIGHT"},{type:"input_value",name:"BACKWARD",check:"Number",align:"RIGHT"},{type:"input_value",name:"LEFT",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_BUTTON_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_BUTTON_TOOLTIP);
this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_temperature={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_TEMPERATURE,args0:[{type:"input_value",name:"RED",check:"Number",align:"RIGHT"},{type:"input_value",name:"BLUE",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_TEMPERATURE_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_TEMPERATURE_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_rc_sound={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_RC_SOUND,args0:[{type:"field_dropdown",name:"LED",options:[[Blockly.Msg.THYMIO_LED_RC_SOUND_RC,"leds.rc"],[Blockly.Msg.THYMIO_LED_RC_SOUND_SOUND,"leds.sound"]]},{type:"input_value",name:"INTENSITY",check:"Number",align:"RIGHT"}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_RC_SOUND_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_RC_SOUND_TOOLTIP);this.setPreviousStatement(!0);
this.setNextStatement(!0)}};
Blockly.Blocks.thymio_led_off={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_LED_OFF,args0:[{type:"field_dropdown",name:"LED",options:[[Blockly.Msg.THYMIO_LED_OFF_TOP,"leds.top"],[Blockly.Msg.THYMIO_LED_OFF_BOTTOM_LEFT,"leds.bottom.left"],[Blockly.Msg.THYMIO_LED_OFF_BOTTOM_RIGHT,"leds.bottom.right"],[Blockly.Msg.THYMIO_LED_OFF_CIRCLE,"leds.circle"],[Blockly.Msg.THYMIO_LED_OFF_PROX_H,"leds.prox.h"],[Blockly.Msg.THYMIO_LED_OFF_PROX_V,"leds.prox.v"],[Blockly.Msg.THYMIO_LED_OFF_RC,"leds.rc"],
[Blockly.Msg.THYMIO_LED_OFF_BUTTONS,"leds.buttons"],[Blockly.Msg.THYMIO_LED_OFF_TEMPERATURE,"leds.temperature"],[Blockly.Msg.THYMIO_LED_OFF_MICROPHONE,"leds.sound"]]}]});this.setColour(Blockly.Blocks.thymio.LEDS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_LED_OFF_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_LED_OFF_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_sound_system={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SOUND_SYSTEM,args0:[{type:"field_dropdown",name:"SOUND",options:[[Blockly.Msg.THYMIO_SOUND_SYSTEM_STARTUP,"0"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_SHUTDOWN,"1"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_ARROW,"2"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_CENTRAL,"3"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_SCARY,"4"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_COLLISION,"5"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_TARGET_FRIENDLY,"6"],[Blockly.Msg.THYMIO_SOUND_SYSTEM_TARGET_DETECTED,
"7"]]}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SOUND_SYSTEM_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SOUND_SYSTEM_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_sound_note={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SOUND_NOTE,args0:[{type:"input_value",name:"FREQ",check:"Number"},{type:"input_value",name:"DURATION",check:"Number"}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SOUND_NOTE_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SOUND_NOTE_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_sound_stop={init:function(){this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SOUND_STOP_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SOUND_STOP_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0);this.appendDummyInput().appendField(Blockly.Msg.THYMIO_SOUND_STOP)}};
Blockly.Blocks.thymio_button_pressed={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_BUTTON_PRESSED,args0:[{type:"field_dropdown",name:"BUTTON",options:[[Blockly.Msg.THYMIO_BUTTON_PRESSED_CENTER,"button.center"],[Blockly.Msg.THYMIO_BUTTON_PRESSED_FORWARD,"button.forward"],[Blockly.Msg.THYMIO_BUTTON_PRESSED_BACKWARD,"button.backward"],[Blockly.Msg.THYMIO_BUTTON_PRESSED_LEFT,"button.left"],[Blockly.Msg.THYMIO_BUTTON_PRESSED_RIGHT,"button.right"]]}]});this.setColour(Blockly.Blocks.logic.HUE);
this.setHelpUrl(Blockly.Msg.THYMIO_BUTTON_PRESSED_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_BUTTON_PRESSED_TOOLTIP);this.setOutput(!0,"Boolean")}};
Blockly.Blocks.thymio_prox_check={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_PROX_CHECK,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_PROX_CHECK_FRONT_LEFT,"prox.horizontal[0]"],[Blockly.Msg.THYMIO_PROX_CHECK_FRONT_LEFT_MIDDLE,"prox.horizontal[1]"],[Blockly.Msg.THYMIO_PROX_CHECK_FRONT_MIDDLE,"prox.horizontal[2]"],[Blockly.Msg.THYMIO_PROX_CHECK_FRONT_RIGHT_MIDDLE,"prox.horizontal[3]"],[Blockly.Msg.THYMIO_PROX_CHECK_FRONT_RIGHT,"prox.horizontal[4]"],[Blockly.Msg.THYMIO_PROX_CHECK_REAR_LEFT,
"prox.horizontal[5]"],[Blockly.Msg.THYMIO_PROX_CHECK_REAR_RIGHT,"prox.horizontal[6]"]]},{type:"field_dropdown",name:"MODE",options:[[Blockly.Msg.THYMIO_PROX_CHECK_PROX,"PROX"],[Blockly.Msg.THYMIO_PROX_CHECK_NOPROX,"NOPROX"]]}]});this.setColour(Blockly.Blocks.logic.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_PROX_CHECK_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_PROX_CHECK_TOOLTIP);this.setOutput(!0,"Boolean")}};
Blockly.Blocks.thymio_prox_ground_check={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_PROX_GROUND_CHECK,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_LEFT,"prox.ground.delta[0]"],[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_RIGHT,"prox.ground.delta[1]"]]},{type:"field_dropdown",name:"MODE",options:[[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_BLACK,"BLACK"],[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_WHITE,"WHITE"],[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_PROX,
"PROX"],[Blockly.Msg.THYMIO_PROX_GROUND_CHECK_NOPROX,"NOPROX"]]}]});this.setColour(Blockly.Blocks.logic.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_PROX_GROUND_CHECK_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_PROX_GROUND_CHECK_TOOLTIP);this.setOutput(!0,"Boolean")}};
Blockly.Blocks.thymio_sensor_temperature={init:function(){this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_TEMPERATURE_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_TEMPERATURE_TOOLTIP);this.setOutput(!0,"Number");this.appendDummyInput().appendField(Blockly.Msg.THYMIO_SENSOR_TEMPERATURE)}};
Blockly.Blocks.thymio_sensor_mic={init:function(){this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_MIC_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_MIC_TOOLTIP);this.setOutput(!0,"Number");this.appendDummyInput().appendField(Blockly.Msg.THYMIO_SENSOR_MIC)}};
Blockly.Blocks.thymio_sensor_comm={init:function(){this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_COMM_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_COMM_TOOLTIP);this.setOutput(!0,"Number");this.appendDummyInput().appendField(Blockly.Msg.THYMIO_SENSOR_COMM)}};
Blockly.Blocks.thymio_sensor_prox={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SENSOR_PROX,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_SENSOR_PROX_FRONT_LEFT,"prox.horizontal[0]"],[Blockly.Msg.THYMIO_SENSOR_PROX_FRONT_LEFT_MIDDLE,"prox.horizontal[1]"],[Blockly.Msg.THYMIO_SENSOR_PROX_FRONT_MIDDLE,"prox.horizontal[2]"],[Blockly.Msg.THYMIO_SENSOR_PROX_FRONT_RIGHT_MIDDLE,"prox.horizontal[3]"],[Blockly.Msg.THYMIO_SENSOR_PROX_FRONT_RIGHT,"prox.horizontal[4]"],
[Blockly.Msg.THYMIO_SENSOR_PROX_REAR_LEFT,"prox.horizontal[5]"],[Blockly.Msg.THYMIO_SENSOR_PROX_REAR_RIGHT,"prox.horizontal[6]"],[Blockly.Msg.THYMIO_SENSOR_PROX_GROUND_LEFT,"prox.ground.delta[0]"],[Blockly.Msg.THYMIO_SENSOR_PROX_GROUND_RIGHT,"prox.ground.delta[1]"]]}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_PROX_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_PROX_TOOLTIP);this.setOutput(!0,"Number")}};
Blockly.Blocks.thymio_sensor_motor={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SENSOR_MOTOR,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_SENSOR_MOTOR_LEFT,"motor.left.speed"],[Blockly.Msg.THYMIO_SENSOR_MOTOR_RIGHT,"motor.right.speed"]]}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_MOTOR_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_MOTOR_TOOLTIP);this.setOutput(!0,"Number")}};
Blockly.Blocks.thymio_sensor_acc={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SENSOR_ACC,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_SENSOR_ACC_X,"acc[0]"],[Blockly.Msg.THYMIO_SENSOR_ACC_Y,"acc[1]"],[Blockly.Msg.THYMIO_SENSOR_ACC_Z,"acc[2]"]]}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_ACC_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_ACC_TOOLTIP);this.setOutput(!0,"Number")}};
Blockly.Blocks.thymio_sensor_rc={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SENSOR_RC,args0:[{type:"field_dropdown",name:"SENSOR",options:[[Blockly.Msg.THYMIO_SENSOR_RC_ADDRESS,"rc5.address"],[Blockly.Msg.THYMIO_SENSOR_RC_COMMAND,"rc5.command"]]}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SENSOR_RC_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SENSOR_RC_TOOLTIP);this.setOutput(!0,"Number")}};
Blockly.Blocks.thymio_motors_start={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_MOTORS_START,args0:[{type:"field_dropdown",name:"COMMAND",options:[[Blockly.Msg.THYMIO_MOTORS_START_FORWARD,"FORWARD"],[Blockly.Msg.THYMIO_MOTORS_START_BACKWARD,"BACKWARD"],[Blockly.Msg.THYMIO_MOTORS_START_TURNLEFT,"TURNLEFT"],[Blockly.Msg.THYMIO_MOTORS_START_TURNRIGHT,"TURNRIGHT"],[Blockly.Msg.THYMIO_MOTORS_START_TURNBACKWARDLEFT,"TURNBACKWARDLEFT"],[Blockly.Msg.THYMIO_MOTORS_START_TURNBACKWARDRIGHT,"TURNBACKWARDRIGHT"],
[Blockly.Msg.THYMIO_MOTORS_START_SPINCCW,"SPINCCW"],[Blockly.Msg.THYMIO_MOTORS_START_SPINCW,"SPINCW"]]},{type:"input_value",name:"SPEED",check:"Number"}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_MOTORS_START_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_MOTORS_START_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_motors_stop={init:function(){this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_MOTORS_STOP_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_MOTORS_STOP_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0);this.appendDummyInput().appendField(Blockly.Msg.THYMIO_MOTORS_STOP)}};
Blockly.Blocks.thymio_actuator_mic={init:function(){this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_ACTUATOR_MIC_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_ACTUATOR_MIC_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0);this.appendValueInput("VALUE").setCheck("Number").appendField(Blockly.Msg.THYMIO_ACTUATOR_MIC)}};
Blockly.Blocks.thymio_actuator_comm={init:function(){this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_ACTUATOR_COMM_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_ACTUATOR_COMM_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0);this.appendValueInput("VALUE").setCheck("Number").appendField(Blockly.Msg.THYMIO_ACTUATOR_COMM)}};
Blockly.Blocks.thymio_actuator_timer={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_ACTUATOR_TIMER,args0:[{type:"field_dropdown",name:"VARIABLE",options:[[Blockly.Msg.THYMIO_ACTUATOR_TIMER_FIRST,"timer.period[0]"],[Blockly.Msg.THYMIO_ACTUATOR_TIMER_SECOND,"timer.period[1]"]]},{type:"input_value",name:"VALUE",check:"Number"}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_ACTUATOR_TIMER_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_ACTUATOR_TIMER_TOOLTIP);
this.setPreviousStatement(!0);this.setNextStatement(!0);this.setInputsInline(!0)}};
Blockly.Blocks.thymio_actuator_motor={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_ACTUATOR_MOTOR,args0:[{type:"field_dropdown",name:"VARIABLE",options:[[Blockly.Msg.THYMIO_ACTUATOR_MOTOR_LEFT,"motor.left.target"],[Blockly.Msg.THYMIO_ACTUATOR_MOTOR_RIGHT,"motor.right.target"]]},{type:"input_value",name:"VALUE",check:"Number"}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_ACTUATOR_MOTOR_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_ACTUATOR_MOTOR_TOOLTIP);
this.setPreviousStatement(!0);this.setNextStatement(!0)}};
Blockly.Blocks.thymio_variable_get={init:function(){this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);this.setColour(Blockly.Blocks.variables.HUE);this.appendDummyInput().appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME),"VAR");this.setOutput(!0,"Number");this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);this.contextMenuMsg_=Blockly.Msg.VARIABLES_GET_CREATE_SET},getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&
this.setFieldValue(b,"VAR")},contextMenuType_:"thymio_variable_set",customContextMenu:function(a){var b={enabled:!0},c=this.getFieldValue("VAR");b.text=this.contextMenuMsg_.replace("%1",c);c=goog.dom.createDom("field",null,c);c.setAttribute("name","VAR");c=goog.dom.createDom("block",null,c);c.setAttribute("type",this.contextMenuType_);b.callback=Blockly.ContextMenu.callbackFactory(this,c);a.push(b)}};
Blockly.Blocks.thymio_variable_set={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_VARIABLE_SET,args0:[{type:"field_variable",name:"VAR",variable:Blockly.Msg.VARIABLES_DEFAULT_NAME},{type:"input_value",name:"VALUE",check:"Number"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.variables.HUE,tooltip:Blockly.Msg.VARIABLES_SET_TOOLTIP,helpUrl:Blockly.Msg.VARIABLES_SET_HELPURL});this.contextMenuMsg_=Blockly.Msg.VARIABLES_SET_CREATE_GET},getVars:function(){return[this.getFieldValue("VAR")]},
renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")},contextMenuType_:"thymio_variable_get",customContextMenu:Blockly.Blocks.thymio_variable_get.customContextMenu};
Blockly.Blocks.thymio_declare_array={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_DECLARE_ARRAY,args0:[{type:"field_variable",name:"VAR",variable:Blockly.Msg.VARIABLES_DEFAULT_NAME},{type:"field_input",name:"SIZE",text:"3"}]});this.setColour(Blockly.Blocks.variables.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_DECLARE_ARRAY_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_DECLARE_ARRAY_TOOLTIP);this.getField("SIZE").setChangeHandler(Blockly.FieldTextInput.numberValidator)},getVars:function(){return[this.getFieldValue("VAR")]},
renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")}};
Blockly.Blocks.thymio_set_array={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_SET_ARRAY,args0:[{type:"field_variable",name:"VAR",variable:Blockly.Msg.VARIABLES_DEFAULT_NAME},{type:"input_value",name:"INDEX",check:"Number"},{type:"input_value",name:"VALUE",check:"Number"}]});this.setColour(Blockly.Blocks.variables.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_SET_ARRAY_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_SET_ARRAY_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setInputsInline(!0)},
getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")}};
Blockly.Blocks.thymio_get_array={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_GET_ARRAY,args0:[{type:"field_variable",name:"VAR",variable:Blockly.Msg.VARIABLES_DEFAULT_NAME},{type:"input_value",name:"INDEX",check:"Number"}]});this.setColour(Blockly.Blocks.variables.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_GET_ARRAY_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_GET_ARRAY_TOOLTIP);this.setOutput(!0,"Number");this.setInputsInline(!0)},getVars:function(){return[this.getFieldValue("VAR")]},
renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")}};
Blockly.Blocks.thymio_compare={init:function(){var a=this.RTL?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);this.setColour(Blockly.Blocks.logic.HUE);this.setOutput(!0,"Boolean");this.appendValueInput("A").setCheck("Number");this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(a),"OP");this.setInputsInline(!0);
var b=this;this.setTooltip(function(){var a=b.getFieldValue("OP");return{EQ:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,NEQ:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,LT:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,LTE:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,GT:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,GTE:Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE}[a]})}};
Blockly.Blocks.thymio_arithmetic={init:function(){this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_ARITHMETIC_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_ARITHMETIC_TOOLTIP);var a=[];a.push(["+","+"]);a.push(["-","-"]);a.push(["*","*"]);a.push(["\u00f7","/"]);a.push(["mod","%"]);this.setOutput(!0,"Number");this.appendValueInput("A").setCheck("Number");this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(a),"OP");this.setInputsInline(!0)}};
Blockly.Blocks.thymio_binary={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_BINARY,args0:[{type:"field_dropdown",name:"OP",options:[[Blockly.Msg.THYMIO_BINARY_LEFT_SHIFT,"<<"],[Blockly.Msg.THYMIO_BINARY_RIGHT_SHIFT,">>"],[Blockly.Msg.THYMIO_BINARY_AND,"&"],[Blockly.Msg.THYMIO_BINARY_OR,"|"],[Blockly.Msg.THYMIO_BINARY_XOR,"^"]]},{type:"input_value",name:"A",check:"Number"},{type:"input_value",name:"B",check:"Number"}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_BINARY_HELPURL);
this.setTooltip(Blockly.Msg.THYMIO_BINARY_TOOLTIP);this.setOutput(!0,"Number");this.setInputsInline(!0)}};
Blockly.Blocks.thymio_unary={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_UNNARY,args0:[{type:"field_dropdown",name:"OP",options:[[Blockly.Msg.THYMIO_UNNARY_NEGATIVE,"-"],[Blockly.Msg.THYMIO_UNNARY_ABSOLUTE,"abs"],[Blockly.Msg.THYMIO_UNNARY_BINARY_NOT,"~"]]},{type:"input_value",name:"VALUE",check:"Number"}]});this.setColour(Blockly.Blocks.math.HUE);this.setHelpUrl(Blockly.Msg.THYMIO_UNARY_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_UNARY_TOOLTIP);this.setOutput(!0,"Number")}};
Blockly.Blocks.thymio_communication={init:function(){this.jsonInit({message0:Blockly.Msg.THYMIO_COMMUNICATION,args0:[{type:"field_dropdown",name:"MODE",options:[[Blockly.Msg.THYMIO_COMMUNICATION_ENABLE,"ENABLE"],[Blockly.Msg.THYMIO_COMMUNICATION_DISABLE,"DISABLE"]]}]});this.setColour(Blockly.Blocks.thymio.ACTUATORS_HUE);this.setHelpUrl(Blockly.Msg.THYMIO_COMMUNICATION_HELPURL);this.setTooltip(Blockly.Msg.THYMIO_COMMUNICATION_TOOLTIP);this.setPreviousStatement(!0);this.setNextStatement(!0)}};Blockly.Blocks.loops={};Blockly.Blocks.loops.HUE=120;Blockly.Blocks.controls_repeat_ext={init:function(){this.jsonInit({message0:Blockly.Msg.CONTROLS_REPEAT_TITLE,args0:[{type:"input_value",name:"TIMES",check:"Number"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.loops.HUE,tooltip:Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,helpUrl:Blockly.Msg.CONTROLS_REPEAT_HELPURL});this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO)}};
Blockly.Blocks.controls_repeat={init:function(){this.jsonInit({message0:Blockly.Msg.CONTROLS_REPEAT_TITLE,args0:[{type:"field_input",name:"TIMES",text:"10"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.loops.HUE,tooltip:Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,helpUrl:Blockly.Msg.CONTROLS_REPEAT_HELPURL});this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);this.getField("TIMES").setChangeHandler(Blockly.FieldTextInput.nonnegativeIntegerValidator)}};
Blockly.Blocks.controls_whileUntil={init:function(){var a=[[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE,"WHILE"],[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL,"UNTIL"]];this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);this.setColour(Blockly.Blocks.loops.HUE);this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(a),"MODE");this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);this.setPreviousStatement(!0);this.setNextStatement(!0);
var b=this;this.setTooltip(function(){var a=b.getFieldValue("MODE");return{WHILE:Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,UNTIL:Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}[a]})}};
Blockly.Blocks.controls_for={init:function(){this.jsonInit({message0:Blockly.Msg.CONTROLS_FOR_TITLE,args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"FROM",check:"Number",align:"RIGHT"},{type:"input_value",name:"TO",check:"Number",align:"RIGHT"},{type:"input_value",name:"BY",check:"Number",align:"RIGHT"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Blocks.loops.HUE,helpUrl:Blockly.Msg.CONTROLS_FOR_HELPURL});this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
var a=this;this.setTooltip(function(){return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1",a.getFieldValue("VAR"))})},getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")},customContextMenu:function(a){if(!this.isCollapsed()){var b={enabled:!0},c=this.getFieldValue("VAR");b.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",c);c=goog.dom.createDom("field",null,c);c.setAttribute("name","VAR");
c=goog.dom.createDom("block",null,c);c.setAttribute("type","variables_get");b.callback=Blockly.ContextMenu.callbackFactory(this,c);a.push(b)}}};
Blockly.Blocks.controls_forEach={init:function(){this.jsonInit({message0:Blockly.Msg.CONTROLS_FOREACH_TITLE,args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"LIST",check:"Array"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.loops.HUE,helpUrl:Blockly.Msg.CONTROLS_FOREACH_HELPURL});this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO);var a=this;this.setTooltip(function(){return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1",
a.getFieldValue("VAR"))})},getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")},customContextMenu:Blockly.Blocks.controls_for.customContextMenu};
Blockly.Blocks.controls_flow_statements={init:function(){var a=[[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK,"BREAK"],[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE,"CONTINUE"]];this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL);this.setColour(Blockly.Blocks.loops.HUE);this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"FLOW");this.setPreviousStatement(!0);var b=this;this.setTooltip(function(){var a=b.getFieldValue("FLOW");return{BREAK:Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
CONTINUE:Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}[a]})},onchange:function(){var a=!1,b=this;do{if("controls_repeat"==b.type||"controls_repeat_ext"==b.type||"controls_forEach"==b.type||"controls_for"==b.type||"controls_whileUntil"==b.type){a=!0;break}b=b.getSurroundParent()}while(b);a?this.setWarningText(null):this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)}};Blockly.Blocks.texts={};Blockly.Blocks.texts.HUE=160;
Blockly.Blocks.text={init:function(){this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.appendDummyInput().appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""),"TEXT").appendField(this.newQuote_(!1));this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)},newQuote_:function(a){return new Blockly.FieldImage(a==this.RTL?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
12,12,'"')}};
Blockly.Blocks.text_join={init:function(){this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.itemCount_=2;this.updateShape_();this.setOutput(!0,"String");this.setMutator(new Blockly.Mutator(["text_create_join_item"]));this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("items",this.itemCount_);return a},domToMutation:function(a){this.itemCount_=parseInt(a.getAttribute("items"),10);
this.updateShape_()},decompose:function(a){var b=Blockly.Block.obtain(a,"text_create_join_container");b.initSvg();for(var c=b.getInput("STACK").connection,d=0;d<this.itemCount_;d++){var e=Blockly.Block.obtain(a,"text_create_join_item");e.initSvg();c.connect(e.previousConnection);c=e.nextConnection}return b},compose:function(a){var b=a.getInputTargetBlock("STACK");for(a=[];b;)a.push(b.valueConnection_),b=b.nextConnection&&b.nextConnection.targetBlock();this.itemCount_=a.length;this.updateShape_();
for(b=0;b<this.itemCount_;b++)a[b]&&this.getInput("ADD"+b).connection.connect(a[b])},saveConnections:function(a){a=a.getInputTargetBlock("STACK");for(var b=0;a;){var c=this.getInput("ADD"+b);a.valueConnection_=c&&c.connection.targetConnection;b++;a=a.nextConnection&&a.nextConnection.targetBlock()}},updateShape_:function(){if(this.getInput("EMPTY"))this.removeInput("EMPTY");else for(var a=0;this.getInput("ADD"+a);)this.removeInput("ADD"+a),a++;if(0==this.itemCount_)this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));
else for(a=0;a<this.itemCount_;a++){var b=this.appendValueInput("ADD"+a);0==a&&b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)}},newQuote_:Blockly.Blocks.text.newQuote_};Blockly.Blocks.text_create_join_container={init:function(){this.setColour(Blockly.Blocks.texts.HUE);this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN);this.appendStatementInput("STACK");this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.text_create_join_item={init:function(){this.setColour(Blockly.Blocks.texts.HUE);this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.text_append={init:function(){this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.appendValueInput("TEXT").appendField(Blockly.Msg.TEXT_APPEND_TO).appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE),"VAR").appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);this.setPreviousStatement(!0);this.setNextStatement(!0);var a=this;this.setTooltip(function(){return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace("%1",a.getFieldValue("VAR"))})},
getVars:function(){return[this.getFieldValue("VAR")]},renameVar:function(a,b){Blockly.Names.equals(a,this.getFieldValue("VAR"))&&this.setFieldValue(b,"VAR")}};Blockly.Blocks.text_length={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_LENGTH_TITLE,args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Number",colour:Blockly.Blocks.texts.HUE,tooltip:Blockly.Msg.TEXT_LENGTH_TOOLTIP,helpUrl:Blockly.Msg.TEXT_LENGTH_HELPURL})}};
Blockly.Blocks.text_isEmpty={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_ISEMPTY_TITLE,args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Boolean",colour:Blockly.Blocks.texts.HUE,tooltip:Blockly.Msg.TEXT_ISEMPTY_TOOLTIP,helpUrl:Blockly.Msg.TEXT_ISEMPTY_HELPURL})}};
Blockly.Blocks.text_indexOf={init:function(){var a=[[Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST,"FIRST"],[Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.setOutput(!0,"Number");this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);this.appendValueInput("FIND").setCheck("String").appendField(new Blockly.FieldDropdown(a),"END");Blockly.Msg.TEXT_INDEXOF_TAIL&&this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
this.setInputsInline(!0);this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP)}};
Blockly.Blocks.text_charAt={init:function(){this.WHERE_OPTIONS=[[Blockly.Msg.TEXT_CHARAT_FROM_START,"FROM_START"],[Blockly.Msg.TEXT_CHARAT_FROM_END,"FROM_END"],[Blockly.Msg.TEXT_CHARAT_FIRST,"FIRST"],[Blockly.Msg.TEXT_CHARAT_LAST,"LAST"],[Blockly.Msg.TEXT_CHARAT_RANDOM,"RANDOM"]];this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.setOutput(!0,"String");this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);this.appendDummyInput("AT");
this.setInputsInline(!0);this.updateAt_(!0);this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation"),b=this.getInput("AT").type==Blockly.INPUT_VALUE;a.setAttribute("at",b);return a},domToMutation:function(a){a="false"!=a.getAttribute("at");this.updateAt_(a)},updateAt_:function(a){this.removeInput("AT");this.removeInput("ORDINAL",!0);a?(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT");Blockly.Msg.TEXT_CHARAT_TAIL&&(this.removeInput("TAIL",!0),this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));var b=new Blockly.FieldDropdown(this.WHERE_OPTIONS,function(b){var c="FROM_START"==b||"FROM_END"==b;if(c!=a){var e=this.sourceBlock_;e.updateAt_(c);e.setFieldValue(b,"WHERE");return null}});this.getInput("AT").appendField(b,"WHERE")}};
Blockly.Blocks.text_getSubstring={init:function(){this.WHERE_OPTIONS_1=[[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START,"FROM_START"],[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END,"FROM_END"],[Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST,"FIRST"]];this.WHERE_OPTIONS_2=[[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START,"FROM_START"],[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END,"FROM_END"],[Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);
this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);this.appendDummyInput("AT1");this.appendDummyInput("AT2");Blockly.Msg.TEXT_GET_SUBSTRING_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);this.setInputsInline(!0);this.setOutput(!0,"String");this.updateAt_(1,!0);this.updateAt_(2,!0);this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation"),
b=this.getInput("AT1").type==Blockly.INPUT_VALUE;a.setAttribute("at1",b);b=this.getInput("AT2").type==Blockly.INPUT_VALUE;a.setAttribute("at2",b);return a},domToMutation:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.updateAt_(1,b);this.updateAt_(2,a)},updateAt_:function(a,b){this.removeInput("AT"+a);this.removeInput("ORDINAL"+a,!0);b?(this.appendValueInput("AT"+a).setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL"+a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT"+a);2==a&&Blockly.Msg.TEXT_GET_SUBSTRING_TAIL&&(this.removeInput("TAIL",!0),this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));var c=new Blockly.FieldDropdown(this["WHERE_OPTIONS_"+a],function(c){var d="FROM_START"==c||"FROM_END"==c;if(d!=b){var f=this.sourceBlock_;f.updateAt_(a,d);f.setFieldValue(c,"WHERE"+a);return null}});this.getInput("AT"+a).appendField(c,"WHERE"+a);1==a&&this.moveInputBefore("AT1","AT2")}};
Blockly.Blocks.text_changeCase={init:function(){var a=[[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE,"UPPERCASE"],[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE,"LOWERCASE"],[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE,"TITLECASE"]];this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a),"CASE");this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)}};
Blockly.Blocks.text_trim={init:function(){var a=[[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH,"BOTH"],[Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT,"LEFT"],[Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT,"RIGHT"]];this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a),"MODE");this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP)}};
Blockly.Blocks.text_print={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_PRINT_TITLE,args0:[{type:"input_value",name:"TEXT"}],previousStatement:null,nextStatement:null,colour:Blockly.Blocks.texts.HUE,tooltip:Blockly.Msg.TEXT_PRINT_TOOLTIP,helpUrl:Blockly.Msg.TEXT_PRINT_HELPURL})}};
Blockly.Blocks.text_prompt_ext={init:function(){var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]];this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);var b=this;a=new Blockly.FieldDropdown(a,function(a){b.updateType_(a)});this.appendValueInput("TEXT").appendField(a,"TYPE");this.setOutput(!0,"String");this.setTooltip(function(){return"TEXT"==b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},
updateType_:function(a){"NUMBER"==a?this.outputConnection.setCheck("Number"):this.outputConnection.setCheck("String")},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("type",this.getFieldValue("TYPE"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("type"))}};
Blockly.Blocks.text_prompt={init:function(){var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]],b=this;this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setColour(Blockly.Blocks.texts.HUE);a=new Blockly.FieldDropdown(a,function(a){b.updateType_(a)});this.appendDummyInput().appendField(a,"TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""),"TEXT").appendField(this.newQuote_(!1));this.setOutput(!0,"String");b=this;this.setTooltip(function(){return"TEXT"==
b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},newQuote_:Blockly.Blocks.text.newQuote_,updateType_:Blockly.Blocks.text_prompt_ext.updateType_,mutationToDom:Blockly.Blocks.text_prompt_ext.mutationToDom,domToMutation:Blockly.Blocks.text_prompt_ext.domToMutation};return Blockly.Blocks;
        }
   */
