const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./services/dataBase');

const envioService = require('./services/envioService');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

//rutas de los endpoints
app.post('/api/cliente', envioService.registrarClienteConCreditos); //registrar cliente y asignar créditos
app.get('/api/clientes', envioService.listarClientes); //listar clientes
app.post('/api/producto', envioService.registrarProducto); //registrar producto
app.post('/api/envio', envioService.registrarEnvio); //registrar envio
app.get('/api/creditos/:clienteId', envioService.verCreditos); //verificar créditos del cliente
app.get('/api/envios/:clienteId', envioService.verEnviosPorCliente); //ver envios por cliente
app.delete('/api/envio/:envioId', envioService.eliminarEnvio); //eliminar envio por id

app.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`);
});