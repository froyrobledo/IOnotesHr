import Note from "../models/Note";

export default ( io )=>{
    io.on('connection', (socket)=>{
       
       const sendNotes = async () =>{
       const notes =  await Note.find()
        
        io.emit('server:loadnotes', notes)
       }
       sendNotes()
       socket.on('client:savenote', async (data) =>{
           const newNote = new Note(data)
           const savednote = await newNote.save()
           io.emit('server:savenote', savednote)
       })

       socket.on('client:deletenote', async (id) =>{
           await Note.findByIdAndDelete(id)
           sendNotes()
       })

       socket.on('client:getnote', async (id) =>{
        const note = await Note.findById(id)
        io.emit('server:selectednote', note)
    })

    socket.on('client:updatenote', async (updatedNote)=>{
        await Note.findByIdAndUpdate(updatedNote._id, {
            title: updatedNote.title,
            description: updatedNote.description,
        })
        sendNotes()
    })
    })
    
}