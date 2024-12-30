module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || 'root', // Fallback to 'root' for local development
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || 'vinariam', // Add a fallback name
    "host": process.env.DB_HOST || '127.0.0.1',
    "dialect": process.env.DB_DIALECT || 'mysql',
    "dialectModule": require('mysql2'),
    "define": {
      "underscored": true,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {    
    "username": process.env.DB_USERNAME,    
    "password": process.env.DB_PASSWORD,   
    "database": process.env.DB_DATABASE,    
    "host": process.env.DB_HOST,    
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "define": {
      "underscored": true
    },
    "port": process.env.DB_PORT,
    "dialectOptions": {
      "database": process.env.DB_DATABASE // Ensure the database name is set.
    }
  }
}

