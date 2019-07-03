//
// jshint esversion : 6

const { connect } = require('./client');
const { setupInput } = require('./input');




console.log('Connecting ...');
connect();
setupInput();
