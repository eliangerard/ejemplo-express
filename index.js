const express = require('express');
const fs = require('fs');
const app = express();

// Endpoint para devolver "Hola Mundo"
app.get('/hola', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Endpoint para mostrar el contenido de un archivo de texto
app.get('/texto', (req, res) => {
  fs.readFile('miarchivo.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('¡Algo salió mal!');
    }
    res.send(data);
  });
});

// Endpoint para obtener un número aleatorio
app.get('/aleatorio', (req, res) => {
  const numero = Math.random();
  res.send(`Tu número aleatorio es: ${numero}`);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
