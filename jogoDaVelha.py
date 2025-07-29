guia = [[0, 1, 2], [3, 4, 5], [6, 7, 8], # Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # Colunas
        [0, 4, 8], [2, 4, 6]] # Diagonais

def alternarJogador(jogador):
    return 'X' if jogador == 'O' else 'O'

def mostrarTabuleiro(tabuleiro):
    """Mostra o tabuleiro como texto."""
    def quebrarLinha(i):
        """Verifica se é necessário quebrar linha no loop ao mostrar o tabuleiro 3x3 como texto."""
        if (i + 1) % 3 == 0:
            return '\n'
        return ''

    for i, string in enumerate(tabuleiro):
        fimDaLinha = quebrarLinha(i)
        print(f' {string} ', end=fimDaLinha)

class Jogo:
    """Inicia um jogo."""
    def __init__ (self) -> None:
        self.tabuleiro = list(range(9))
        self.jogadorAtual = 'X'

    def jogar(self, quadradoId):
        """Aplica a mudança no tabuleiro dependendo do jogador e verifica vitória."""
        if type(self.tabuleiro[quadradoId]) == int:-

            self.tabuleiro[quadradoId] = self.jogadorAtual
            mostrarTabuleiro(self.tabuleiro)
            quemVenceu = self.verificarVitoria()
            self.jogadorAtual = alternarJogador(self.jogadorAtual)
            return quemVenceu
        return self.jogadorAtual

    def verificarVitoria(self):
        """Verifica a vitória com base no guia."""
        for coords in guia:
            linha = {self.tabuleiro[coord] for coord in coords}
            # print(linha)
            if len(linha) == 1 and -1 not in linha:
                print(self.jogadorAtual, 'venceu!')
                return {'linhaVencedora': coords, 'jogadorVencedor': self.jogadorAtual}
        return False

if __name__ == '__main__':
    jogo = Jogo()
    jogada = jogo.jogar(int(input('Quadradinho: ')))
    while type(jogada) != dict:
        jogada = jogo.jogar(int(input('Quadradinho: ')))
    # help(type({0}))

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