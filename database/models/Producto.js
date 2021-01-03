module.exports = (sequelize, DataTypes) => {
    const alias = "Producto"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER

        }
        /*image: {
            type: ¿?.
        }*/
    }
    const config = {
        tableName: "productos",
        timestamps: false
    }


    const Producto = sequelize.define(alias, cols, config);

    //relaciones

    return Producto;

}