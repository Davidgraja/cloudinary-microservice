const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.cloudinaryPath = '/api/cloudinary';

        /*Middlewares*/
        this.middlewares()

        /*Rutas del servidor*/
        this.routes();

    }

    middlewares (){

        /*Lectura y pareseo de la informacion del body*/

        this.app.use(express.json())

        /*Configuración de Cors*/
        this.app.use(cors());

        /*Dicrectorio publico*/
        this.app.use(express.static('public'));
    }

    routes (){

        this.app.use( this.cloudinaryPath , require('../routes/cloudinary'))

    }


    listen (){
        this.app.listen( this.port , () => {
            console.log('this server is listening in the port ' + this.port)
        });
    }
}

module.exports = Server;