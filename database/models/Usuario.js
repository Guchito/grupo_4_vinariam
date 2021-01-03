module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        userName: {
            type: DataTypes.STRING
        },
        typeId: {
            type: DataTypes.INTEGER

        }
        /*image: {
            type: ¿?.
        }*/
    }
    const config = {
        tableName: "usuarios",
        timestamps: false
    }


    const Usuario = sequelize.define(alias, cols, config);

    //relaciones

    return Usuario;

}