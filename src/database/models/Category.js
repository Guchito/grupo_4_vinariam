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
    const CategoryModel = sequelize.define(alias, cols, config);
    return CategoryModel;

}