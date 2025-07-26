# Flask - Web Dev com Python no BackEnd.

#### Flask-SocketIO: WebSockets para transferência de dados em tempo real.

###### O flask já executa os sites na LAN por padrão :)

---
##### Não se esqueça de instalar o Flask-SocketIO!
```bash
pip install flask-socketio
```
##### O qual será importado no script: 

```python
from flask import Flask
from flask_socketio import SocketIO # Aqui

app = Flask(__name__)
socketio = SocketIO(app) # E aqui.
```
---

#### Funcionamento do SocketIO
###### O cliente envia um evento
1. O cliente (JavaScript) usa o seguinte método para enviar dados ao servidor: 
```js
let dados = tabuleiro;
socket.emit('evento', dados);
```
###### Servidor recebe o evento
2. O servidor (Python) escuta o evento com um decorador e processa os dados recebidos:
```python
@socketio.on('evento') 
def handle_evento(data):
    print(data)
```
###### Servidor envia uma resposta
3. O servidor usa o seguinte comando para enviar dados processados de volta ao cliente.
```python
dados = {'resposta': 'ok'}
socketio.emit('evento', dados)
```
###### Cliente recebe a resposta
4. O cliente escuta o evento com o seguinte comando e atualiza a interface.
```js
socket.on('evento', callback)
// Ou melhor:
socket.on('evento', (data) => {
    console.log(data.resposta);
});
```