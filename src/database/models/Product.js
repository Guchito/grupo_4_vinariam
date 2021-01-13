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
        img: {
            type: DataTypes.STRING
        },
        class: {
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


    const Product = sequelize.define(alias, cols, config);
   
    Product.associate = (models) => {
        Product.belongsTo(models.Brand,{
            as: "brand",
            foreignKey: "brand_id",
        });
    };

    Product.associate = (models) => {
        Product.belongsToMany(models.Size,{
            as: "sizes",
            through: "product_size",
            foreignKey: "size_id",
            otherKey: "product_id",
            timestamps: true
        });
    };
    Product.associate = (models) => {
        Product.belongsToMany(models.Category,{
            as: "categories",
            through: "product_category",
            foreignKey: "category_id",
            otherKey: "product_id",
            timestamps: true
        });
    };
    return Product;

}