const form = document.getElementById('form')
const inputText = document.querySelectorAll('.input')
const btnEnviar = document.getElementById('btn-enviar')
const small = document.getElementsByTagName('small')
const campo = document.getElementsByClassName('campo')
const inputName = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputTelefone = document.getElementById('telefone')
const inputMensagem = document.getElementById('mensagem')


inputText.forEach(input => {
    input.addEventListener('change', () =>{
        if(input.value !==''){
            input.classList.add('campo-preenchido')
        } else if(input.value === ''){
            input.classList.remove('campo-preenchido')
        }
    })
})

function checkName(){
    if(inputName.value === ''){
        small[0].classList.remove('required')
        campo[0].classList.remove('margin')
        inputName.classList.add('campo-vazio')
    } else {
        small[0].classList.add('required')
        campo[0].classList.add('margin')
    }
}

function checkEmail(){
    if(inputEmail.value === ''){
        small[1].classList.remove('required')
        campo[1].classList.remove('margin')
        inputEmail.classList.add('campo-vazio')
    } else {
        small[1].classList.add('required')
        campo[1].classList.add('margin')
    }
}

function checkTelefone(){
    if(inputTelefone.value === ''){
        small[2].classList.remove('required')
        campo[2].classList.remove('margin')
        inputTelefone.classList.add('campo-vazio')
    } else {
        small[2].classList.add('required')
        campo[2].classList.add('margin')
    }
}

function checkMensagem(){
    if(inputMensagem.value === ''){
        small[3].classList.remove('required')
        campo[3].classList.remove('margin')
        inputMensagem.classList.add('campo-vazio')
    }  else {
        small[3].classList.add('required')
        campo[3].classList.add('margin')
    }
}

btnEnviar.addEventListener('click', (i)=>{
    i.preventDefault()

    checkName()
    checkEmail()
    checkTelefone()
    checkMensagem()
})