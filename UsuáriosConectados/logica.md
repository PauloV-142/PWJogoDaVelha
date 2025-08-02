# Gerenciamento de usuáris com Flask

## Identificação

### 1 - O flask escuta por conexões.
Usando um decorador com o evento "connect", a função retornará uma página de identificação, para que o usuário insira os dados requeridos. (O básico mesmo, sem login nem nada, pois eu nem sei fazê-lo ainda) Talvez um captcha nessa página, se for abrir para a internet. (Ou algo mais avancado)


### 2 - O cliente retorna os dados em um objeto javascript.
Após clicar no botão de enviar, o javascript envia os dados para o sevidor com um evento chamado "conexao-iniciada" ou algo semelhante.

### 3 - O servidor recebe os dados.
Ao receber, o servidor adiciona os dados em um dicionário (sid como chave)composto de dicionários (Conterá os dados de cada cliente.) Após isso, o servidor redireciona o usuário ao site principal. Usando a sintaxe to=sid, se for possível.

## Usuário host.
Esse usuário terá a visão da lista de todos os usuários conectados com base no dicionário que o servidor criou.