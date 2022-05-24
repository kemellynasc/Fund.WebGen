let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


nome.style.width ='100%'
email.style.width = '100%'

function validaNome(){

    if(nome.value.length < 3) {
        alert('Nome invalido!!!')

    }
}
    

