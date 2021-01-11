module.exports = (sequelize, DataTypes) => {
    const alias = "Brand"
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
        tableName: "brands",
        timestamps: true
    };
    const Brand = sequelize.define(alias, cols, config);
    
    Brand.associate = function(models){
        Brand.hasMany(models.Product,{
            as: "products",
            foreignKey: "brand_id"
        })
    }

    return Brand;

}