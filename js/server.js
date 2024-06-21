const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/bodega')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Definir esquema y modelo
const contactoSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    mensaje: String
});

const Contacto = mongoose.model('Contacto', contactoSchema);

// Ruta para recibir datos del formulario
app.post('/contacto', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const nuevoContacto = new Contacto({
        nombre,
        email,
        mensaje
    });

    try {
        await nuevoContacto.save();
        console.log('Nuevo contacto guardado:', nuevoContacto); // Log para verificar los datos guardados
        res.status(201).send('Contacto guardado');
    } catch (err) {
        console.log('Error al guardar contacto:', err); // Log de errores
        res.status(400).send('Error al guardar contacto');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
