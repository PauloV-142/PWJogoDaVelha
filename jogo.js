let jogador = 1

function alternarJogador() {
    jogador = (jogador + 1) % 2
    if (jogador == 1) {
        return 'imgo'
    } else {
        return 'imgx'
    }
}

function play(slot) {
    // quadrado = document.getElementById(slot)
    slot.classList.add(alternarJogador())
}