const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(process.env.MONGO_URI,  {

        })
        .then(() => console.log('Conexión exitosa a db'))
        .catch(err => console.error('Error de configuración', err));
    }

    static obtenerConexion() {
        if(!Database.instancia){
            Database.instancia = new Database();
        }

        return Database.instancia;
    }
}

module.exports = Database.obtenerConexion();