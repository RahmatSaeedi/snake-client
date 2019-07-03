/*  Handles all the logic related to setting up input stream and handling user input.
*/
// jshint esversion : 6

const { log } = require('./logger');

let tcpConnection;

const input = {
  setupInput : (conn) => {
    tcpConnection = conn;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
  
    stdin.on('data', (data) => {
      /* ctrl + c ====> EXIT application */
      if (data === '\u0003') {
        process.exit();
      } else if (data === 'W' || data === 'w' || data === '8') {
        /* w, W, 8 ====> Move up */
        tcpConnection.write('Move: up');
        log('up');
      } else if (data === 'S' || data === 's' || data === '2') {
        /* S, s, 2 ====> Move down */
        tcpConnection.write('Move: down');
        log('down');
      } else if (data === 'D' || data === 'd' || data === '6') {
        /* D, d, 6 ====> Move right */
        tcpConnection.write('Move: right');
        log('right');
      } else if (data === 'A' || data === 'a' || data === '4') {
        /* w, W, 8 ====> Move left */
        tcpConnection.write('Move: left');
        log('left');
      } else if (data === 'H' || data === 'h') {
        /* H, h ====> Hi there */
        tcpConnection.write('Say: Hi there');
        log('Said: Hi there');
      } else if (data === 'G' || data === 'g') {
        /* g ====> Got to go */
        tcpConnection.write('Say: Got to go');
        log('Said: Got to go');
      } else if (data === 'B' || data === 'b') {
        /* b ====> Bye ppl */
        tcpConnection.write('Say: Bye ppl');
        log('Said: Bye ppl');
      } else {
        log(data);
      }
    });

    return stdin;
  },


};



module.exports = input;