const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.set('view engine', 'ejs');


app.listen(3001);

const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /productos
const usersRouter = require('./routes/users'); // Rutas /users

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/users', usersRouter);


module.exports = app;