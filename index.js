var express = require('express');
var app = express();
var http = require('http').createServer(app);//http nativo
var io = require('socket.io')(http);

io.on('connection',(socket) => {// socket é o cliente na verdade / fazendo conexão

    socket.on('disconnect', () => {// oque fazer quando cliente desconectar
        console.log('X desconectou: ' + socket.id);
    })

    socket.on('boasvindas', (data) => {//evento 'boasvindas' / recebendo valor
        console.log('EXECUTANDO EVENTO DE BOAS VINDAS');
        console.log(data);
    })

    socket.on('palavra', (data) => {//evento 'palavra' / recebendo valor
        console.log(data);
        socket.emit('resultado', data + ' - GUIA DO PROGRAMADOR!')//evento 'resultado' / enviando valor
    })
});

app.set('view engine','ejs');

app.get("/", (req, res) => {
    res.render('index')
});

http.listen(3000, ()=> {
    console.log('App rodando');
});