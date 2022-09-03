const express = require('express');
const cors = require("cors");
const { dbConnection } = require('../db/config');


class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPhat = '/api/usuarios';

        //coneccion db
        this.conectarDB();

        //midlewares
        this.midlewares();

        //routes
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    routes(){
        this.app.use(this.usuariosPhat , require('../routes/usuarios'));
    }

    listen(){
        this.app.listen( this.port,() =>{
            console.log(`servidor ubicado en el puerto ${this.port}`);
        });
    }

    midlewares(){

        this.app.use(cors());

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

}

module.exports = Server;