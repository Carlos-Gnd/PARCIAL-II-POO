const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    creditos: { type: Number, default: 10 } //creditos asignados al cliente por defecto
});

module.exports = mongoose.model('Cliente', clienteSchema);
