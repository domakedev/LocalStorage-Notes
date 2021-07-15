let button = document.querySelector('.sendButton')
let dataIn = document.querySelector('.dataIn')

button.addEventListener('click',imprimir);

function imprimir(){
    console.log(`Tu nota es: ${dataIn.value}`)
}