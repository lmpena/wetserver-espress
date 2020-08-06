const http = require('http');

// Para escuchar peticiones http, lo primero es crear el servidor.
http.createServer((req, res) => {

        //res.write('Hola Mundo!');
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Luis',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080); // Puerto local por defecto

console.log('Escuchando por el puerto 8080');