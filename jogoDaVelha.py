guia = [[0, 1, 2], [3, 4, 5], [6, 7, 8], # Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # Colunas
        [0, 4, 8], [2, 4, 6]] # Diagonais

class JogoDaVelha():
    """Inicia um jogo."""
    def __init__ (self, jogadores) -> None:
        self.jogadores = jogadores
        self.tabuleiro = [-1] * 9
        self.jogador = 1

    alternarJogador = lambda jog : (jog + 1) % 2

    def jogar(self, quadradoId):
        if self.tabuleiro[quadradoId] == -1:
            self.tabuleiro[quadradoId] = self.jogador
            if self.verificarVitoria():
                return True
            self.jogador = JogoDaVelha.alternarJogador(self.jogador)
            return False

    def verificarVitoria(self):
        for coords in guia:
            linha = {self.tabuleiro[coord] for coord in coords}
            if len(linha) == 1 and -1 not in linha:
                return True
            return False
    
    # Para me lembrar de que existe outro modo.
    # def verificarVitoria(self, jogador: int) -> bool:
    #     for linha in guia:
    #         # Verifica se todos os quadrados da linha pertencem ao jogador atual
    #         if all(self.tabuleiro[coord] == jogador for coord in linha):
    #             return True
    #     return False

if __name__ == '__main__':
    p1 = 'p1'
    p2 = 'p2'
    jogo1 = JogoDaVelha([p1, p2])
    jogadas = list(range(9))
    ganhos = 0
    import random
    random.shuffle(jogadas)
    for i in jogadas: 
        if jogo1.jogar(i):
            print(jogo1.jogador, 'Ganhou!')
            break
        else:
            print('Siga em frente...')
    