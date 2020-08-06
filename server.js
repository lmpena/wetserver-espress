const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// La variable de entorno no existe corriendo en local
// tomará valor 3000, en producción será el puerto que indique la 
// variable de entorno.
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// app.get('/', function(req, res) {
//     //res.send('Hello World');

//     let salida = {
//         nombre: 'Luis',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida);

// });

// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.get('/', (req, res) => {
    //res.send('Hola Data');
    res.render('home', {
        nombre: 'luiS maRiaNo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});