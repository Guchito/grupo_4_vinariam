const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public

app.listen(3000);

const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/productos'); // Rutas /products
const usersRouter = require('./routes/users'); // Rutas /users

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/users', usersRouter);
