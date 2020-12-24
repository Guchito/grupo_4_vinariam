const fs = require('fs');
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/vinos.json');
const usersFilePath = path.resolve(__dirname, '../data/users.json');
const multer = require('multer');

const helper = { 

  //products
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
    },

    delete(idToDelete){
      let products = helper.getAllProducts();
        const productToDelete = idToDelete;
        products = products.filter(function(product){
            return product.id != productToDelete;
        });
        helper.writeProducts(products);
    }, 
  
  //users
    getAllUsers(){
      const jsonUsers = fs.readFileSync(usersFilePath, 'utf-8');
      const usersParsed = JSON.parse(jsonUsers);
      return usersParsed;
    },

  writeUsers(arrayToTransform){
      const usersJson = JSON.stringify(arrayToTransform, null, " ");
      fs.writeFileSync(usersFilePath, usersJson);
  },
  
  generateNewIdUsers(){
      const users = helper.getAllUsers();
      return users.pop().id + 1;
  }, 
  
  uploadUser(){
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, __dirname + '/../../public/img/users')
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + path.extname(file.originalname))
        }
      })
        
      return multer({ storage: storage })
    },
    getAUser(email){
      const users = helper.getAllUsers();
      const user =  users.filter(function(user){
          return user.email == email
          
      });      
      return user[0]
    }
  
  }

module.exports = helper;