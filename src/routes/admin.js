const express = require('express');
const router = express.Router();
const path = require ('path');
const multer = require('multer');
const adminController = require('../controllers/adminController'); //requiero al controlador


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../public/img')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage: storage })

/* ROUTES ADMIN */


router.get('/carga', adminController.carga); // Ver la vista de carga de productos
router.post('/carga', upload.any(), adminController.store); // Carga el formulario

/*Export */

module.exports = router;