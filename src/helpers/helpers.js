const fs = require('fs');
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/vinos.json');

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

}

module.exports = helper;