guia = [[0, 1, 2], [3, 4, 5], [6, 7, 8], # Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # Colunas
        [0, 4, 8], [2, 4, 6]] # Diagonais

alternarJogador = lambda jog : (jog + 1) % 2

def mostrarTabuleiro(tabuleiro):
    def quebrarLinha(i):
        if (i + 1) % 3 == 0:
            return '\n'
        return ''

    for i in range(9):
        celVal = tabuleiro[i]
        if celVal == 1:
            print(' X ', end=quebrarLinha(i))
        elif celVal == 0:
            print(' O ', end=quebrarLinha(i))
        else:
            print(f' {i} ', end=quebrarLinha(i))
    print()
        

class Jogo:
    """Inicia um jogo."""
    def __init__ (self) -> None:
        self.tabuleiro = [-1] * 9
        self.jogador = 1

    def jogar(self, quadradoId):
        """Aplica a mudança no tabuleiro dependendo do jogador e verifica vitória."""
        if self.tabuleiro[quadradoId] == -1:
            self.tabuleiro[quadradoId] = self.jogador
            #mostrarTabuleiro(self.tabuleiro)
            if self.verificarVitoria():
                return True
            self.jogador = alternarJogador(self.jogador)
            return False

    def verificarVitoria(self):
        for coords in guia:
            linha = {self.tabuleiro[coord] for coord in coords}
            if len(linha) == 1 and -1 not in linha:
                return True
            return False

    '''# Para me lembrar de que existe outro modo.
    # def verificarVitoria(self, jogador: int) -> bool:
    #     for linha in guia:
    #         # Verifica se todos os quadrados da linha pertencem ao jogador atual
    #         if all(self.tabuleiro[coord] == jogador for coord in linha):
    #             return True
    #     return False
    '''
'''
class Combate:
    def __init__ (self, idDosJogadores: list, partidas = 3):
        self.idDosJogadores = idDosJogadores
        self.numeroDePartidas = partidas
        self.partidas = list(range(partidas))
        self.partidaAtual = 0
        self.iniciarPartida()

    def iniciarPartida(self):
        self.partidas[self.partidaAtual] = Jogo()
    
    def jogar(self, quadradoId):
        if self.partidas[self.partidaAtual].jogar(quadradoId):
            print(f'O jogador {self.partidas[self.partidaAtual].jogador} ganhou a {self.partidaAtual + 1}°a Partida!')
            self.partidaAtual += 1 if self.partidaAtual < self.numeroDePartidas else print('O jogo acabou!')
        else:
            print(f'Partida {self.partidaAtual}, continue...')

if __name__ == '__main__':
    p1 = 'p1'
    p2 = 'p2'
    torneio1 = SerieDeJogos([p1, p2], 1)
    i = 1
    while i < 9:
        quadradinho = int(input('Quadrado: '))
        if type(quadradinho) != type('ha') and quadradinho >= 0 and quadradinho < 9:
            torneio1.jogar(quadradinho)
            i += 1
        else:
            print('Quadradinho inválido >:3')
    print('fim do teste')
'''