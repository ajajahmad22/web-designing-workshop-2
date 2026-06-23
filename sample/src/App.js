const EventEmitter = require('events');

class MyEventManager extends EventEmitter {}

const manager = new MyEventManager();

const students = ["ram", "shyam", "radhe"];

manager.on('studentsReady', (list) => {
  console.log('Event triggered: studentsReady →', list);

  const uppercased = list.map(name => name.toUpperCase());
  console.log('Uppercased:', uppercased);

  const totalLength = list.reduce((acc, name) => acc + name.length, 0);
  console.log('Total characters:', totalLength);
});

manager.emit('studentsReady', students);
