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
    const SizeModel = sequelize.define(alias, cols, config);
    return SizeModel;

}