socket = io('http://192.168.1.9:5000/'); // Conecta ao servidor.

const quadrados = document.querySelectorAll('.quadrado');

const imgVal = ['imgo', 'imgx'];

// Para não enviar dados ao server atoa.
let tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function enviarClick(quadradoId) {
    if (tabuleiro[quadradoId] != 1) {
        socket.emit('quadrado-click', +quadradoId);
        tabuleiro[quadradoId] = 1;
        // console.log(tabuleiro)
    }
};

quadrados.forEach((element) => {
    element.addEventListener('click', () =>  enviarClick(element.id));
});

socket.on('atualizar-quadrado', (dados) => {
    quadrados[dados.id].classList.add(imgVal[dados.jogador])    
})


const btnReiniciar = document.getElementById('reiniciar');
btnReiniciar.addEventListener('click', () => {
    socket.emit('reiniciar');
    tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    quadrados.forEach((element) => {
        element.classList.remove('imgo', 'imgx');
    })
})
