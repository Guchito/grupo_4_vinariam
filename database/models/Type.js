module.exports = (sequelize, DataTypes) => {
    const alias = "Type"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "types",
        timestamps: false
    }


    const Type = sequelize.define(alias, cols, config);

    //relaciones

    return Type;

}