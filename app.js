//console.log(_.isString(true));
//console.log(_.isString('Yuriy'));
//console.log(_.isString(123));

//var filteredArray = _.uniq(['Yuriy']);
//console.log(filteredArray);

console.log('Starting app.js');
const fs = require('fs');
const _ =  require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add','Add a new note', {
        title:titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title:titleOptions
    })
    .command('remove','Remove note',{
        title:titleOptions
    })
    .help()
    .argv;
//var command = process.argv[2]; 
var command = argv._[0];
console.log('Command: ', command);
console.log(process.argv);
console.log('Prosses', process.argv);
console.log('Yargs:',argv);

if(command==='add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }

} else if(command==='list'){
    var newNotes = notes.getAll();
    console.log(`Printing ${newNotes.length} note(s).`);
    
    newNotes.forEach((note) => notes.logNote(note));

} else if(command==='read') {
    var note = notes.readNote(argv.title);
    if(note){
        console.log('Note reading');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
}else if(command==='remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed": "Note not found";
    console.log(message);
}else {
    console.log('Command not recognized');
}