from flask import Flask, render_template, request
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

userData = dict()


# Indica a página, ex http://127.0.0.1:5000/hello
@app.route('/') #@app.route('/hello')
def index():
    return render_template('index.html')
    

@socketio.on('connect')
def conectado():
    sid = request.sid
    userData.update({sid: dict()})

@socketio.on('novo-usuario')
def addNovoUsuario(apelido):
    sid = request.sid
    userData[sid].update({'nome': apelido})
    print(userData)

app.run(host="0.0.0.0", port=5000, debug=True)
# O modo debug recarrega automaticamente e mostra erros no console do navegador.