/*  Establishes connection to the server- assumes `localhost`.
//  Prints `Connected to server...` upon successful connection.
//  Sets the snake-name to `SNK` upon successful connection.
//  Logs server responses to screen.
*/
// jshint esversion : 6
const net = require('net');
const { log } = require('./logger');

/**
 * Establishes connection with the game server
 */
const client = {
  connect: function() {
    const conn = net.createConnection({
      host: 'localhost',
      port: 50541
    });

    /* interpret incoming data as text */
    conn.setEncoding('utf8');

    /* CONNECT event */
    conn.on('connect',()=>{
      log('Connected to server...');
      conn.write('Name: SNK');

      const MoveUp = () => setTimeout(() => {
        conn.write('Move: up');
        MoveUp();
      }, 500);

      const MoveRight = () => setTimeout(() => {
        conn.write('Move: right');
        MoveRight();
      }, 50);

      MoveUp();


    });

    /* DATA event */
    conn.on('data', (data) => {
      log(`Server says: ${data}`);
    });




    return conn;
  }
};



module.exports = client;