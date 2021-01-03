module.exports = (sequelize, DataTypes) => {
    const alias = "Categoria"
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
        tableName: "categorias",
        timestamps: false
    }


    const Categoria = sequelize.define(alias, cols, config);

    //relaciones

    return Categoria;

}