//
// jshint esversion : 6
const { log } = require('./logger');
const { connect } = require('./client');
const { setupInput } = require('./input');




log('Connecting ...');
const tcpConnection = connect();
setupInput(tcpConnection);
