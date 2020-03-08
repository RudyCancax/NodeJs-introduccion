// En este ejercicio usaremos http, con el cual podremos
// crear un servidor Web
const http = require('http');

/*
  Usaremos http.createServer(), el cual tomará algo de tiempo, en el le 
  ejecutaremos algo dentro de la función que realizará al terminar de crearlo
  además podemos seguir ejecutando código sin necesidad de esperar

  Estructura de la función a ejecutar:
    request o req: Solicitud del usuario
    response o res: respuesta del servidor al request del cliente

    Agregamos al final de la función createServer() el metodo "listen" en el cual
    indicaremos el puerto de escucha del servidor, en este ejercicio usaremos
    el puerto 3000
*/
http.createServer(function(req, res) {
    // A una petición responderemos con un mensaje mediante el método Write
    res.write('<h1>HOLA MUNDO DESDE NODE JS</h1>');
    // Detenemos la respuesta, para que el servidor quede disponible para otra solicitud
    res.end();

}).listen(3000);