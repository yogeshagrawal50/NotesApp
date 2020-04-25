 const fs = require('fs')
 const chalk = require('chalk')

 const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Notes added')
    } else {
        console.log('Note title taken')
    }
    
 }

const removeNote =(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
      
    if (notes.length > notesToKeep.length){
        console.log(chalk.green("Note Removed"))
    }else{
        console.log(chalk.red("Note Not Found"))
    }

    saveNotes(notesToKeep)

}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note => { 
        console.log(note.title)        
    })
}

const readNote= (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red("Note not found"))
    }
}

const saveNotes =(notes)=>{
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

const loadNotes = () => {
    try{
    const dataBuffer =  fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}
 module.exports = {
     getNotes: getNotes,
     addNote: addNote,
     removeNote: removeNote,
     listNotes: listNotes,
     readNote: readNote    
 }