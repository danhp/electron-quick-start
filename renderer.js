// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var webFrame = require('electron').webFrame;
var SpellCheckProvider = require('electron-spell-check-provider');

webFrame.setSpellCheckProvider('en-US', true, new SpellCheckProvider('en-US'));
