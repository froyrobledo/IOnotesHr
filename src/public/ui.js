import { saveNote, deleteNote, getNoteById, updateNote } from "./sockets.js";

const notesList = document.querySelector("#notes");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
let savedId = "";
/**
 * Funcion que renderiza las notas en el front
 * @param {*} note
 * @returns
 */
const noteUi = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
  <div class="d-flex justify-content-between">
      <h1 class="card-title h3">${note.title}</h1>
      <div>
          <button class="btn btn-success update" data-id="${note._id}">Actualizar</button>
          <button class="btn btn-danger delete" data-id="${note._id}">Eliminar</button>
      </div>
  </div>
  <p>${note.description}</p>
</div>
  `;
  const btnupdate = div.querySelector(".update");
  const btndelete = div.querySelector(".delete");
  btndelete.addEventListener("click", (e) => deleteNote(btndelete.dataset.id));
  btnupdate.addEventListener("click", (e) => getNoteById(btnupdate.dataset.id));
  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => notesList.append(noteUi(note)));
};

export const fillForm = (note) => {
  title.value = note.title;
  description.value = note.description;
  savedId = note._id;
};

export const onHandlesubmit = (e) => {
  e.preventDefault();
  if (savedId) {
    updateNote(savedId, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }
  savedId = "";
  title.value = "";
  description.value = "";
};

export const appendNote = (note) => {
  notesList.append(noteUi(note));
};
