const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    referencia: { type: String, default: '' },
    observacion: { type: String, default: '' },
    costoEnvio: { type: Number, required: true }
});

module.exports = mongoose.model('Envio', envioSchema);