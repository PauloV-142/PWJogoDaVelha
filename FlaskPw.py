from flask import Flask, render_template
from flask_socketio import SocketIO
from jogoDaVelha import JogoDaVelha

app = Flask(__name__)
socketio = SocketIO(app) # É claro, uma nova instância da classe!

@app.route("/")
def index():
    return render_template("index.html")

# Decorador EventHandler que chama uma função ao escutar o evento 'quadrado_click'.
@socketio.on('quadrado_click')
def quadradoClick(quadradoId, jogador):
    print(f'O jogador {jogador} clicou no quadrado {quadradoId}!')

@socketio.on('vitoria')
def tratarVitoria(strJogador):
    print(f'{strJogador} Ganhou!')
    socketio.emit('retorno', data:={'mensagem': f'{strJogador} Ganhou!'})

app.run(host="0.0.0.0", port=5000, debug=True)