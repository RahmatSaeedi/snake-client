/*  Handles all the logic related to setting up input stream and handling user input.
*/
// jshint esversion : 6

const { log } = require('./logger');
const input = {
  setupInput : () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
  
    stdin.on('data', (data) => {
      if (data === '\u0003') {
        process.exit();
      } else {
        log(data);
      }
    });

    stdin.on('error', (err) => {
      log(err);
    });
  
    return stdin;
  },


};


module.exports = input;