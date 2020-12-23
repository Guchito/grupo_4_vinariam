const express = require('express');
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');
const soyMayorMiddleware = require('./middlewares/soyMayorMiddleware');
const cookieParser = require('cookie-parser')
const rememberMe = require('./middlewares/rememberMe')
const createError = require('http-errors')


const app = express();

app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.set('view engine', 'ejs');

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


app.use(session ({secret:'aca va una frase secreta, shh!', resave: true, saveUninitialized: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

/**Middlewares */

// app.use(soyMayorMiddleware); // Desahibilito el middleware de soy mayor, porque es molesto para trabajar
app.use(rememberMe);




/** Rutas */
const mainRouter = require('./routes/main'); // Rutas Main
const productsRouter = require('./routes/products'); // Rutas / Products
const usersRouter = require('./routes/users'); // Rutas / Users
const adminRouter = require('./routes/admin'); // rutas /admin


app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

app.use((req, res, next) => next(createError(404)));




// error 
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;