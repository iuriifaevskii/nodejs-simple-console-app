console.log('start app');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(notes);
console.log(res);


console.log('result:', notes.add(3,5));

//var user = os.userInfo();
//fs.appendFile('greetings.txt',`hello ${user.username}! You are ${notes.age}` );
