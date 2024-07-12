
const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}!`);
});

myEmitter.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});

myEmitter.emit('greet', 'Darshan');

myEmitter.emit('error', new Error('Something went wrong!'));

setTimeout(() => {
    myEmitter.emit('greet', 'Darshsan');
}, 2000);
