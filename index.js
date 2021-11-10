const { randomInt } = require('crypto');
const fs = require('fs');
const express = require('express');
const app = express();

const DATA ={
    usuarios:[
    "Juan",
    "Jocelin",
    "Astrid",
    "Maria",
    "Ignacia",
    "Javier",
    "Brian"
]
}
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(express.static('assets'));

app.get('/abracadabra/usuarios', (req, res) => {
    res.send(JSON.stringify(DATA));
});
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    let usuario = req.params.usuario;
    DATA.usuarios.indexOf(usuario) > -1 ? next(): res.send('<img src="/who.jpeg" alt="" class="w-100">'); //who.jpg
});
app.get('/abracadabra/juego/:usuario', (req, res) => {
    
    res.sendFile(__dirname + '/index.html');
});

app.get('/abracadabra/conejo/:n',   (req, res) => {
    let n = req.params.n;
    let nrandom=randomInt(4)+1;
    n==nrandom ?
    res.send('<img src="/conejito.jpg" alt="" class="w-100">')
    :
    res.send('<img src="/voldemort.jpg" alt="" class="w-100">');
});

app.get('*',(req, res) => {
    res.send('<h1>ESTA PÁGINA NO EXISTE</h1>');
});

//ruta generica que regrese el mensaje ql 

