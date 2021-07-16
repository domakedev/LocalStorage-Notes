//Variables

let note = document.querySelector(".dataIn");
let button = document.querySelector(".sendButton");
let notas = document.querySelector(".notas_container");

//Event Listener

eventListeners();

function eventListeners() {
  button.addEventListener("click", printFromHTMLAndSaveNoteInLS);

  notas.addEventListener("click", deleteNote);

  document.addEventListener("DOMContentLoaded", printFromLS);
}

//Funciones

function printFromHTMLAndSaveNoteInLS() {
  //Imprime en el HTML si es dif de vacio
  let comprobarExistencia = leerLS();

  if (
    note.value !== "" &&
    note.value !== " " &&
    !comprobarExistencia.includes(note.value)
  ) {
    let noteLi = document.createElement("li");
    noteLi.classList = "nota";
    noteLi.innerText = note.value;

    let deleteNoteX = document.createElement("a");
    deleteNoteX.innerText = "X";
    deleteNoteX.classList = "delete-nota";

    noteLi.appendChild(deleteNoteX);
    notas.appendChild(noteLi);

    //Guardar notas en LocalStorage
    guardarEnLS();
    
  } else {
    alert("No puedes agregar elementos vacios o repetidos");
  }
}

function deleteNote(e) {
  //Delete from HTML
  //console.log(e.target.classList);
  if (e.target.className === "delete-nota") {
    e.target.parentElement.remove();
    //Delete from LS
    deleteFromLS(e.target.parentElement.innerText);
  }
}

function guardarEnLS() {
  //Antes de guardar se tiene que leer
  let notasEnLS = leerLS();

  //Guardamos la nota en el array si es dif de vacio
  if (note.value !== "" && note.value !== " ") {
    notasEnLS.push(note.value);

    //Convertimos el array en string con JSON stringify
    //y mandamos a LS
    console.log(notasEnLS + "Antes");
    localStorage.setItem("notas", JSON.stringify(notasEnLS));
    console.log(notasEnLS + "Despues");
  }
}

function leerLS() {
  let notasLS;

  if (localStorage.getItem("notas") == null) {
    notasLS = [];
  } else {
    notasLS = JSON.parse(localStorage.getItem("notas"));
  }

  return notasLS;
}

function printFromLS() {
  notasInLS = leerLS();

  notasInLS.forEach(function (nota) {
    //Imprime en el HTML
    let noteLi = document.createElement("li");
    noteLi.classList = "nota";
    noteLi.innerText = nota;

    let deleteNoteX = document.createElement("a");
    deleteNoteX.innerText = "X";
    deleteNoteX.classList = "delete-nota";

    noteLi.appendChild(deleteNoteX);
    notas.appendChild(noteLi);
  });
}

function deleteFromLS(nota) {
  let notaToDelete = nota.substring(0, nota.length - 1);
  console.log("Nota a borrar: " + notaToDelete);
  let todasLasNotas = leerLS(); //Array
  console.log("Todas las notas: " + todasLasNotas);

  todasLasNotas.forEach(function (elemento, index) {
    if (elemento == notaToDelete) {
      console.log("A: " + todasLasNotas);
      todasLasNotas.splice(index, 1);
      console.log("B: " + todasLasNotas);
    }
  });
  console.log("Todas las notas 4EACH: " + todasLasNotas);

  localStorage.setItem("notas", JSON.stringify(todasLasNotas));
}
