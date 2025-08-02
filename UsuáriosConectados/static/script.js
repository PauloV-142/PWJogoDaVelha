const socket = io('http://192.168.1.9:5000/')

const inputNome = document.getElementById('input-nome')
const btnEnviar = document.getElementById('btn-enviar')

btnEnviar.addEventListener('click', () => {
    console.log(inputNome.value)
    socket.emit('novo-usuario', inputNome.value)
})