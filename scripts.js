//Variables

let note = document.querySelector('.dataIn')
let button = document.querySelector('.sendButton')
let notas = document.querySelector('.notas_container')


//Event Listener

eventListeners()

function eventListeners() {

    button.addEventListener('click',printNote)

    notas.addEventListener('click',deleteNote)

}


//Funciones

function imprimirValue() {
    console.log(note.value);
}

function printNote() {
    let noteLi = document.createElement('li')
    noteLi.classList = "nota"
    noteLi.innerText = note.value

    let deleteNoteX = document.createElement('a')
    deleteNoteX.innerText = "X"
    deleteNoteX.classList = "delete-nota"

    noteLi.appendChild(deleteNoteX)
    notas.appendChild(noteLi)
}

function deleteNote(e){

    console.log(e.target.classList);
    if (e.target.className === 'delete-nota') {
        e.target.parentElement.remove()
    }

}
    