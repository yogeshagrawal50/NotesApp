const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//create add
yargs.command({
    command:'add',
    describe:'Add a new  note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new  node',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },    
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list Note',
    handler: function(){
        notes.listNotes()
    }
})

yargs.parse()
// add , remove, read, list

//console.log(yargs.argv)