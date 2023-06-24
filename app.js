require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'))


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Victor Rios',
        titulo: 'Curso express'
    });
})


app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Victor Rios',
        titulo: 'Curso express'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Victor Rios',
        titulo: 'Curso express'
    });
})

app.get('*', (req, res) => {
    res.send('Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
