const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")
const { describe, demandOption } = require("yargs")

yargs.version("1.1.0")

yargs.command({
    command:"list",
    describe:"list notes",
    handler:function(){
        console.log("Mostrar lista en el archivo")
        notes.listNotes()

    }

})


yargs.command({
    command:"read",
    describe:"read a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log("running read command")
        notes.readNote(argv.title)
    }

})


yargs.command({
    command:"Remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log("removiendo nota")
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command:"Edit",
    describe:"Edit a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log("removiendo nota")
        notes.editNote(argv.title,argv.body)
    }

})

yargs.command({
    command: "modify",
    describe: "Modify a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        newTitle: {
            describe: "New note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => notes.modifyNote(argv.title, argv.newTitle),
});

yargs.command(
    {
        command: "add",
        describe: "Add a new note",
        builder: {
            title:{
                describe: "Note title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "Note body",
                demandOption: true,
                type:"string"
            }
        },
        handler: function(argv){
            console.log("Adding a new note...")
            //console.log("Title:" + argv.title)
            //console.log("Body:"+ argv.body)
            notes.addNote(argv.title,argv.body)
        }
        //handler: () =>{
        //    console.log("Adding a new note ...")
        //}
    }
) 

// RETO NO. 3
// 1) Crear comando  para remover una nota, llamado "remove" sólo con 
// la opcion "title"
// 2) Crear en "notes.js" la función removeNote
// 3) Mandarla llamar en "app.js" dentro de la propiedad handler
// 4) En la función removeNote
//    --cargar las notas existentes
//    --usar un filter en el arreglo para encontrar si la nota si está 
//    --en el archivo, creando una lista con las notas que se desean
//    --mantener
// 5) Guardar la nueva lista de notas sobreescribiendo en el archivo con
//    la función saveNotes


yargs.parse()