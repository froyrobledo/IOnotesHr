const socket = io();
export const loadNotes = (callback)=>{
    socket.on("server:loadnotes", callback);
}
export const saveNote  = (title, description) =>{

    socket.emit('client:savenote',{
        title,
        description
    })

}
/**
 * funcion que escucha cuando el servidior envie un evento
 * @param {*} note 
 */
export const onSaveNote = (callback) =>{
    socket.on('server:savenote', callback )
    
}

export const deleteNote = id => {
    socket.emit('client:deletenote', id)
}

export const getNoteById = id => {
    socket.emit('client:getnote', id)
}

export const onSelected = (callback) => {
    socket.on('server:selectednote', callback)
    
}

export const updateNote = (id, title, description) =>{
    socket.emit("client:updatenote",{
        _id: id,
        title,
        description,
    });
}