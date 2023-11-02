const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (arg) => {
  console.log('Custom event occurred with argument:', arg);
});

myEmitter.emit('customEvent', 'Some data');