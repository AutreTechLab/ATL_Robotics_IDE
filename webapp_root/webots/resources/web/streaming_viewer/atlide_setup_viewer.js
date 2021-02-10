/* global webots: false */

var view = null;
var ipInput = null;
var portInput = null;
var connectButton = null;
var atlide_div_element  = 'content_3d_viewer';
var mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (mobileDevice) {
  let head = document.getElementsByTagName('head')[0];
  let jqueryTouch = document.createElement('script');
  jqueryTouch.setAttribute('type', 'text/javascript');
  jqueryTouch.setAttribute('src', 'https://www.cyberbotics.com/jquery-ui/1.11.4/jquery.ui.touch-punch.min.js');
  head.appendChild(jqueryTouch);

  var mobileCss = document.createElement('link');
  mobileCss.setAttribute('rel', 'stylesheet');
  mobileCss.setAttribute('type', 'text/css');
  mobileCss.setAttribute('href', 'https://www.cyberbotics.com/wwi/R2020b/wwi_mobile.css');
  head.appendChild(mobileCss);
}

function webots_streaming_init() {
//  ipInput = document.getElementById('IPInput');
//  portInput = document.getElementById('PortInput');
//  ipInput = "192.168.1.19";
//  portInput = "9090";
  connectButton = document.getElementById('WebotsStreamingConnectButton');
//  $('body').layout({
//    center__maskContents: true,
//    south__size: 128,
//    north__resizable: false
//  });
}

function webots_streaming_connect() {
  // This `streaming viewer` setups a broadcast streaming where the simulation is shown but it is not possible to control it.
  // For any other use, please refer to the documentation:
  // https://www.cyberbotics.com/doc/guide/web-simulation#how-to-embed-a-web-scene-in-your-website
  let playerDiv = document.getElementById("content_3d_viewer");
  view = new webots.View(playerDiv);
  view.broadcast = false; // disable controlling the simulation
  view.setTimeout(-1); // disable timeout that stops the simulation after a given time
  webots.showQuit = false
  let streamingMode ="x3d";
  let ipInput = "192.168.1.19"; //TODO Remove hardcoded IP
  let portInput = "9090";       //TODO
  view.open('ws://' + ipInput+ ':' + portInput, streamingMode);
  connectButton.value = 'Disconnect';
  connectButton.onclick = webots_streaming_disconnect;
}

function webots_streaming_disconnect() {
  view.close();
  view = null;
  let playerDiv = document.getElementById(atlide_div_element);
  playerDiv.innerHTML = null;
  connectButton.value = 'Connect';
  connectButton.onclick = webots_streaming_connect;
//  ipInput.disabled = false;
//  portInput.disabled = false;
}

//window.addEventListener('load', init, false);
