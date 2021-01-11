module.exports = (sequelize, DataTypes) => {
    const alias = "Category"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    
    };
    const config = {
        tableName: "categories",
        timestamps: true
    };
    const Category = sequelize.define(alias, cols, config);
    Category.associate = (models) => {
        Category.belongsToMany(models.Product,{
            as: "products",
            through: "product_category",
            foreignKey: "product_id",
            otherKey: "category_id",
            timestamps: true
        })
    }

    return Category;

}