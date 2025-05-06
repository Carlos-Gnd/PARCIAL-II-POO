const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    peso: { type: Number, required: true },
    bultos: { type: Number, required: true },
    fechaEntrega: { type: Date, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);