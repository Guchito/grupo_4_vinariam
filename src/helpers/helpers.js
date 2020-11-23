const fs = require('fs');
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/vinos.json');
const multer = require('multer');

const helper = { 
    getAllProducts(){
        const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');
        const productsParsed = JSON.parse(jsonProducts);
        return productsParsed;
    },

    writeProducts(arrayToTransform){
        const productsJson = JSON.stringify(arrayToTransform, null, " ");
        fs.writeFileSync(productsFilePath, productsJson);
    },
    
    generateNewId(){
        const products = helper.getAllProducts();
        return products.pop().id + 1;
    },

    upload(){
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, __dirname + '/../../public/img')
            },
            filename: function (req, file, cb) {
              cb(null, Date.now() + '-' + path.extname(file.originalname))
            }
          })
            
          return multer({ storage: storage })
    }

}

module.exports = helper;