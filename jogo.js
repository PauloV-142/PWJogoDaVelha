let jogador = 0; //Talvez o jogador possa ser 1 e -1, para não precisar do array intVal
let tab = [0,0,0,0,0,0,0,0,0];
const imgVal = ['imgo', 'imgx'];
const intVal = [-1, 1];
const debug = document.getElementById('tabDev');
const winGuide = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [2, 4, 6]]; //Hmm, wait, New Way of doing it!

const alternarJogador = num => (++num) % 2;

document.querySelectorAll('.quadrado').forEach(element => {
     element.addEventListener('click',
     () => play(element), {once: true});
});

function update(slot) {
   const quadradoId = slot.id; // Modificar os ids, e acessar a string para obter o número.
   tab[quadradoId] = intVal[jogador];
   debug.innerText = tab;
}

function play(slot) {
   jogador = alternarJogador(jogador);
   jog = imgVal[jogador];
   slot.classList.add(jog);
   update(slot);
}

