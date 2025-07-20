let jogador = 0; //Talvez o jogador possa ser 1 e -1, para não precisar do array intVal
let tab = [0,0,0,0,0,0,0,0,0];
const imgVal = ['imgo', 'imgx'];
const intVal = [-1, 1];
const winGuide = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //Hmm, wait, New Way of doing it!


const txtPontosX = document.getElementById('pontosX');
const txtPontosO = document.getElementById('pontosO');
const imgPontos = [document.getElementById('img-PontosX'), document.getElementById('img-PontosO')];

const quadrados = document.querySelectorAll('.quadrado');

// const txtDebug = document.getElementById('tabDev');
const btnReiniciar = document.getElementById('reiniciar');
const txtVitoria = document.getElementById('mensagem');


quadrados.forEach(element => {
   element.addEventListener('click',
      () => play(element));//, {once: true}
   });
   
const alternarJogador = num => (++num) % 2;

const msg = texto => txtVitoria.textContent = texto;

function atualizar(slot) {
   const quadradoId = slot.id; // É melhor eu modificar os ids, e acessar a string para obter o número.
   tab[quadradoId] = intVal[jogador];
   // txtDebug.textContent = tab;
}

function somar(linha) {
  let soma = 0;
  for (let celula of linha) {
    soma += tab[celula]
  }
  return soma
}

function tratarVitoria(strJogador) {
   txtVitoria.textContent = `${strJogador} Ganhou!`;
   tab = [];//Para não poder clicar mais.
}

function play(slot) {
   if (tab[slot.id] === 0){
      // console.log(slot.id)
      jogador = alternarJogador(jogador);
      jog = imgVal[jogador];
      slot.classList.add(jog);
      imgPontos[jogador].classList.remove('inativo');
      imgPontos[alternarJogador(jogador)].classList.add('inativo');
      atualizar(slot);

      let linhaSoma
      for (let linha of winGuide) {
        linhaSoma = somar(linha)
      
        if (linhaSoma == 3) {
          pontosX.textContent = ++pontosX.textContent;
          tratarVitoria('X');
         }else if (linhaSoma == -3) {
            pontosO.textContent = ++pontosO.textContent;
            tratarVitoria('O');
         } else if (!(tab.includes(0))) {
            console.log(`Empate ${tab}`)
         }
      }
   }
}

function reiniciar() {
   quadrados.forEach(element => {
      element.classList.remove(imgVal[0], imgVal[1])
   });
   tab = [0,0,0,0,0,0,0,0,0];
   txtVitoria.textContent = 'msg';
   // txtDebug.textContent = tab;
}

btnReiniciar.addEventListener('click', reiniciar);


//Já sei! Vou usar a sintaxe (do python):
// if not 0 in linha:
//    if -1 in linha and not 1 in linha:
//         'O Ganhou!'
//      else:
//         'X ganhou'


// let setLegal = new Set([0,1,2]);
// console.log(setLegal);
// console.log(setLegal.has(1));
// console.log(setLegal.has(4));