from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

# Indica a página, ex http://127.0.0.1:5000/hello
@app.route('/') #@app.route('/hello')
def index():
    return render_template('index.html')

app.run(host="0.0.0.0", port=5000, debug=True)
# O modo debug recarrega automaticamente e mostra erros no console do navegador.