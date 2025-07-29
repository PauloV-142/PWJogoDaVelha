// const socket = io('http://10.66.90.110:5000'); // Conecta ao servidor.
const socket = io('http://192.168.1.9:5000/');

const quadrados = document.querySelectorAll('.quadrado');
const btnReiniciar = document.getElementById('reiniciar');
const txtVitoria = document.getElementById('mensagem');

// const imgVal = ['imgo', 'imgx'];
const txtPontos = {
    "X": document.getElementById("txt-pontosX"),
    "O": document.getElementById('txt-pontosO')
};

const msg = texto => txtVitoria.textContent = texto;

// Para não enviar dados ao server atoa.
let tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function enviarClick(quadradoId) {
    if (tabuleiro[quadradoId] != 1) {
        socket.emit('quadrado-click', +quadradoId);
        // console.log(tabuleiro)
    }
};


quadrados.forEach((element) => {
    element.addEventListener('click', () =>  enviarClick(element.id));
});


socket.on('atualizar-quadrado', (dados) => {
    quadrados[dados.id].classList.add(`img${dados.jogadorAtual}`)
    console.log(dados.id, dados.jogadorAtual)
    tabuleiro[dados.id] = dados.jogadorAtual;
})


socket.on('vitoria', (dados) => { // {'linhaVencedora': coords, 'jogadorVencedor': self.jogadorAtual}
    tabuleiro = [1, 1, 1, 1, 1, 1, 1, 1, 1]
    const jogadorVencedor = dados.jogadorVencedor
    msg(`${jogadorVencedor} Ganhou!`);
    txtPontos[jogadorVencedor].textContent = ++txtPontos[jogadorVencedor].textContent; // Adiciona 1 ao contador.
    function rgbR(){ return Math.random() * 255 };
    
    dados.linhaVencedora.forEach(coord => {
        quadrados[coord].style.backgroundColor = `rgb(${rgbR()}, ${rgbR()}, ${rgbR()})`
    })
    animacaoVitoria()
})

btnReiniciar.addEventListener('click', () => {
    socket.emit('reiniciar');
    tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    txtVitoria.textContent = 'msg';
    quadrados.forEach((element) => {
        element.classList.remove('imgO', 'imgX');
        element.style.backgroundColor = ''
    })
})


function animacaoVitoria() {
    const fundo_tabuleiro = document.querySelector('.fundo-tabuleiro');          
    console.log('animacao!');     
    let i = 0;
    function animar() {
       if (i < 300) {
          fundo_tabuleiro.style.backgroundImage = `radial-gradient(farthest-side,  
          rgba(0, 0, 0, 0.5) ${i-140}%,  
          white ${i-80}%,  
          rgba(0, 0, 0, 0.5) ${i-60}%,  
          rgba(0, 0, 0, 0.5) ${i-40}%,  
          white ${i-20}%,  
          rgba(0, 0, 0, 0.5) ${i}%)`; 
          i += 4; 
          // setTimeout(animar, 50); 
          requestAnimationFrame(animar); 
       }; 
    } 
    animar();
}