from flask import Flask, render_template
from flask_socketio import SocketIO
from jogoDaVelha import Jogo

app = Flask(__name__)
socketio = SocketIO(app) # É claro, uma nova instância da classe!

jogo1 = Jogo()

@app.route("/")
def index():
    return render_template("index.html")

# Decorador EventHandler que chama uma função ao escutar o evento 'quadrado_click'.
@socketio.on('quadrado-click')
def quadradoClick(quadradoId):
    print(f'Clicou no quadrado {quadradoId}!')
    jogada = jogo1.jogar(quadradoId)
    if jogada != None:
        socketio.emit('atualizar-quadrado', {'id':quadradoId, 'jogador': jogo1.jogador})
    

@socketio.on('reiniciar')
def reiniciar():
    global jogo1
    jogo1 = Jogo()
    print('reiniciou!')

app.run(host="0.0.0.0", port=5000, debug=True)