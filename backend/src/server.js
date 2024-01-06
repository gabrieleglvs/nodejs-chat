const { WebSocketServer } = require('ws')
const dotenv = require('dotenv')

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

//PEGANDO A CONEXAO DE UM CLIENTE NO SERVIDOR
wss.on('connection', (ws) => {
    ws.on("error", console.error)

    //REPASSANDO AS MENSAGENS PARA TODOS OS CLIENTES CONECTADOS
    ws.on('message', (data) => {
        wss.clients.forEach((client) => client.send(data.toString()))
    });

    console.log('client connected')
})