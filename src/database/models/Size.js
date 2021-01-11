module.exports = (sequelize, DataTypes) => {
    const alias = "Size"
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
        tableName: "sizes",
        timestamps: true
    };
    const Size = sequelize.define(alias, cols, config);
    Size.associate = function(models){
        Size.belongsToMany(models.Product,{
            as: "products",
            through: "product_size",
            foreignKey: "product_id",
            otherKey: "size_id",
            timestamps: true
        })
    }
    return Size;




}