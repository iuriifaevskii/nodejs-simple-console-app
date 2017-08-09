console.log('app notes');

//console.log(module);

// module.exports.age = 25;
// // module.exports.addNote = function(){

// // }
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// }

// module.exports.add = (a,b) => {
//     return a + b;
// }

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note)=> note.title === title);//true or false

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};

var getAll = () => {
    console.log('Getting all notes');
    var notes = fetchNotes();
    return notes;
};

var readNote = (title) => {
    console.log(`Reading note ${title}`);
    var notes = fetchNotes();
    var newNote = notes.filter((note)=> note.title === title);
    
    return newNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    console.log(`Removing note ${title}`);
    var newNotes = notes.filter((note)=> note.title !== title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
};

// module.exports = {
//     addNode: addNode
// };
module.exports = { 
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
 };