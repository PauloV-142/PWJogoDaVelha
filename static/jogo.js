let jogador = 0;
let tab = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const imgVal = ['imgo', 'imgx']; //juntar imgVal com imgPontos.
const winGuide = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const txtPontos = {
    "X": document.getElementById("txt-pontosX"),
    "O": document.getElementById('txt-pontosO')
};
const imgPontos = [
    document.getElementById('img-PontosX'),
    document.getElementById('img-PontosO')
];

const quadrados = document.querySelectorAll('.quadrado');

// const txtDebug = document.getElementById('tabDev');
const btnReiniciar = document.getElementById('reiniciar');
const txtVitoria = document.getElementById('mensagem');

quadrados.forEach(element => {
   element.addEventListener('click',
      () => jogar(element));
   });
   
const alternarJogador = num => (++num) % 2; // Basicamente retorna 0 ou 1

const msg = texto => txtVitoria.textContent = texto;

function buscarDoTabuleiro(linhaGuia) {
  let linhaDoTab = new Set();
  for (let valorQuadrado of linhaGuia) {
      linhaDoTab.add(tab[valorQuadrado]);
  }
  return linhaDoTab;
}

function tratarVitoria(strJogador, linhaVencedora) {
   msg(`${strJogador} Ganhou!`);
   txtPontos[strJogador].textContent = ++txtPontos[strJogador].textContent; // Adiciona 1 ao contador.
   
   function rgbR(){ return Math.random() * 255 };

   linhaVencedora.forEach(coord => { // quadradosVencedores seria melhor OwO
         quadrados[coord].style.backgroundColor = `rgb(${rgbR()}, ${rgbR()}, ${rgbR()})`
      })
   tab = [];//Para não poder clicar mais. E nem dar trigger na condição de empate.
   animacaoVitoria()
}

function jogar(slot) {
const quadradoId = slot.id
if (tab[quadradoId] === -1){ // Verifica se o quadrado não está ocupado.
   jogador = alternarJogador(jogador);
   tab[quadradoId] = jogador

   slot.classList.add(imgVal[jogador]); // Coloca a imagem no quadrado (slot).
   imgPontos[jogador].classList.remove('inativo');
   imgPontos[alternarJogador(jogador)].classList.add('inativo');
   
   let vencedor = false;
   let linhaVencedora = [];
   for (let linhaGuia of winGuide) {
      let linha = buscarDoTabuleiro(linhaGuia);
      
      if (linha.size == 1 && !linha.has(-1)) {
         linhaVencedora = linhaVencedora.concat(linhaGuia)
         if (linha.has(0)) {
            vencedor = 'O';
         } else {
            vencedor = 'X';
         } 
      }
   }
   if (vencedor) {
      tratarVitoria(vencedor, linhaVencedora)
      console.log(linhaVencedora)
   } else if (!tab.includes(-1) && tab.includes(1)) {
      msg("Empate!")
   }
}}

function reiniciar() {
   quadrados.forEach(element => {
      element.classList.remove(imgVal[0], imgVal[1])
   });
   tab = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
   txtVitoria.textContent = 'msg';
   quadrados.forEach(elemento => {
      elemento.style.backgroundColor = ''
   }
   )
}

btnReiniciar.addEventListener('click', reiniciar);

// Animação

function animacaoVitoria() {
   const fundo_tabuleiro = document.querySelector('.fundo-tabuleiro');
   console.log('animacao!');
   let i = 40;
   function animar() {
      if (i < 300) {
         // fundo_tabuleiro.style.backgroundImage = `radial-gradient(farthest-side, rgba(0, 0, 0, 0.5) ${i-140}%, white ${i-80}%, rgba(0, 0, 0, 0.5) ${i-60}%, rgba(0, 0, 0, 0.5) ${i-40}%, white ${i-20}%, rgba(0, 0, 0, 0.5) ${i}%)`;
         fundo_tabuleiro.style.backgroundImage = 
         `radial-gradient(farthest-side, rgba(0, 0, 0, 0.5) 0%a, white ${i}, rgba(0, 0, 0, 0.5) ${i-40}%)`;
         // radial-gradient()`
         i += 4;
         // setTimeout(animar, 50);
         requestAnimationFrame(animar)
      };
   }
   animar();
}