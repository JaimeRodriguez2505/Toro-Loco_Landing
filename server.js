// server.js
const express = require('express');
const path = require('path');

const app = express();

// Define la carpeta donde estarán los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configura el puerto en el que correrá la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
