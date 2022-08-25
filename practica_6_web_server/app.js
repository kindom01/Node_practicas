require('dotenv').config();

const express = require("express");
const port = process.env.PORT;


const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');


app.use( express.static("public") );

app.get('/', (req,res) => {
    res.render('home', {
        nombre: "Pablo Juarez",
        titulo: "Curso de Node"
    });
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        titulo: "Curso de Node"
    })
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        titulo: "Curso de Node"
    });
})

app.get('*', (req,res) => {
    res.sendFile( __dirname + "/public/404.html");
})

app.listen(port, () => {
    console.log(`esta preparado en el puerto ${port}`);
});