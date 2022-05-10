import { loadNotes, onSaveNote, onSelected } from "./sockets.js";
import { onHandlesubmit, renderNotes, appendNote, fillForm } from "./ui.js";

onSaveNote(appendNote)
loadNotes(renderNotes)
onSelected(fillForm)
const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandlesubmit);
