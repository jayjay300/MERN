const fs = require("fs");

const md = `
#this is a new file


we can write to files with fs.writeFile

    *fs.readdir
    *fs.readFile
    *fs.writeFile


`;

fs.writeFile("./assets/notes.md", md.trim(), err => {

    if(err){
        throw err;
    }
    console.log("File saved");
})