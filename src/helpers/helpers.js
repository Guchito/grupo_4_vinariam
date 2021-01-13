const fs = require('fs');
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/vinos.json');
const usersFilePath = path.resolve(__dirname, '../data/users.json');
const multer = require('multer');
const db = require('../database/models');

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
      /*return db.User.findAll();*/
    },

  writeUsers(arrayToTransform){
      const usersJson = JSON.stringify(arrayToTransform, null, " ");
      fs.writeFileSync(usersFilePath, usersJson);
  },
  
  generateNewIdUsers(){
      const users = helper.getAllUsers();
      return users.pop().id + 1;
  }, 
  
  uploadImg(){
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
    getAUser(value){
      const users = helper.getAllUsers();
      let user =  users.filter(function(user){
          return user.email == value
      });
      
      if(!user.length>0){
        user = users.filter(function(user){
          return user.userName.toLowerCase() == value.toLowerCase()
      });
      }
       
      return user[0]
    }
  
  }

module.exports = helper;