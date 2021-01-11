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
        price: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        discount: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        stock: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        image: {
            type: DataTypes.STRING
        }, 
        brand_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    }
    const config = {
        tableName: "products",
        timestamps: true
    }


    const ProductModel = sequelize.define(alias, cols, config);

    //relaciones

    return ProductModel;

}