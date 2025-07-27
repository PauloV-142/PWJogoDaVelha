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
- #### Comunicação:

1. O cliente envia um dado por meio de um evento:

```js
let dados = tabuleiro;
socket.emit('evento', dados);
```

2. O servidor (Python) escuta o evento com um decorador e processa os dados recebidos:
```python
@socketio.on('evento') 
def handle_evento(data):
    print(f'Evento recebido: {data}')
```

3. O servidor usa o seguinte comando para enviar dados processados de volta ao cliente.
```python
dados = {'resposta': 'ok'}
socketio.emit('evento', dados)
```

4. O cliente escuta a resposta com o seguinte comando e atualiza a interface.
```js
socket.on('evento', callback)
// Ou melhor:
socket.on('evento', (data) => {
    console.log(data.resposta);
});
```

- #### No cliente (JavaScript e HTML com SocketIO)
1. Adicione o script do SocketIO no HTML
```html
<script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
```
2. Use ```io()``` para conectar ao servidor
```js
const socket = io('http://localhost:5000');
```

- #### Modo multiplayer: Crie salas com o ```join_room(ID)```

1. O cliente entra em uma sala:
```js
socket.emit('entrar_sala', { jogoId: '123' });
```

2. O servidor escuta e adiciona o cliente a sala requisitada:
```python
@socketio.on('entrar_sala')
def entrar_sala(data):
    jogo_id = data['jogoId']
    join_room(jogo_id)  # Adiciona o cliente à sala do jogo
    print(f"Cliente entrou na sala {jogo_id}")
```

3. O cliente envia os dados apenas para a sua sala no servidor:
```js
jogo_id = 123;
socketio.emit('atualizar_jogo', {'tabuleiro': [0, 1, -1]}, to=jogo_id);
```

- Cada cliente tem um **ID de socket único** que pode ser usado para identificá-lo.
```python
@socketio.on('connect')
def conectado():
    print(f"Cliente conectado: {request.sid}")  # ID único do cliente
```