# Snek.js
A terminal-based Snake implementation written in Node.js.
Works alongside [snek-multiplayer](https://github.com/lighthouse-labs/snek-multiplayer) server.
Max idle-time is `2.5 seconds` between the commands the server recieves.

## [play.js](play.js)
Establishes connection to the server.

## [input.js](input.js)
Handles all the logic related to setting up input stream and handling user input.

| Key                                     | Command                          |
|-----------------------------------------|----------------------------------|
| `W` , `w` , `'8'` , `up arrow key`      | sends move up command            |
| `A`  , `a`  , `'4'`  , `left arrow key` | sends move left command          |
| `S`  , `s`  , `'2'`  , `down arrow key` | sends move down command          |
| `D` , `d` , `'6'` , `right arrow key`   | sends move right command         |
| `H`, `h`                                | sends canned message 'Hi there'  |
| `B`, `b`                                | sends canned message 'Bye ppl'   |
| `G`, `g`                                | sends canned message 'Got to go' |


## [client.js](client.js)
Establishes connection to the server- assumes `localhost`.
Prints `Connected to server...` upon successful connection.
Sets the snake-name to `SNK` upon successful connection.
Logs server responses to screen.

## [logger.js](logger.js)
Universal logger used throughout this application. Currently `console.log` is used to prinnt to the `console`.

## Supported commands by [Snek-Multiplayer server](https://github.com/lighthouse-labs/snek-multiplayer)
Commands are passed by as `utf8` strings between [client]() and [server](https://github.com/lighthouse-labs/snek-multiplayer).
`Name: SNK`
  * Sets the name for snake; in this case `SNK` is the desired name name.
  * Recommended max name of 3-character long.
`Move: up`
  * Moves the snake up one block, (unless facing down)
`Move: down`
  * Moves the snake down one block, (unless facing up)
`Move: left`
  * Moves the snake left one block, (unless facing right)
`Move: right`
  * Moves the snake right one block, (unless facing left)
`Say: {hi there}`
  * Short chat message to be displayed on the screen; in this case `{hi there}`.