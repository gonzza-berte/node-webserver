const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;
// create server with express
const app = express();

// serve static files

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// create routes

app.get('/', (req, res) => {
    res.render('home',
        {
            name : 'Pagina del Curso',
            title : 'Node Course'
        }
    );
});

app.get('/generic', (req, res) => {
    res.render('generic',
    {
        name : 'Pagina del Curso',
        title : 'Node Course'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',
    {
        name : 'Pagina del Curso',
        title : 'Node Course'
    });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});