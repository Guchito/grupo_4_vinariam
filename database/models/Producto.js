module.exports = (sequelize, DataTypes) => {
    const alias = "Product"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        detail: {
            type: DataTypes.TEXT
        },
        discount: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        stock: {
            type: DataTypes.INTEGER.UNSIGNED

        },
        image: {
            type: DataTypes.STRING
        }, 
        category: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "products",
        timestamps: true
    }


    const Product = sequelize.define(alias, cols, config);

    //relaciones

    return Product;

}