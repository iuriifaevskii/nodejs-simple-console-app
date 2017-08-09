// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Andrew","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote ={
    title: 'Some title',
    body: 'Some body'
};


fs.writeFileSync('notes.json',JSON.stringify(originalNote));

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
// note
console.log(typeof note);
console.log(`my note has: ${note.title} and ${note.body}`);