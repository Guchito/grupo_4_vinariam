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
    const BrandModel = sequelize.define(alias, cols, config);
    return BrandModel;

}