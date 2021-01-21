module.exports = (sequelize, DataTypes) => {
    const alias = "Order"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        total: {
            type: DataTypes.DECIMAL.UNSIGNED
        }, 
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    
    };
    const config = {
        tableName: "orders",
        timestamps: true
    };
    const Order = sequelize.define(alias, cols, config);
    
    /*Order.associate = function(models){
        Order.hasMany(models.User,{
            as: "users",
            foreignKey: "user_id"
        });
        Order.hasMany(models.Item,{
            as: "item",
            foreignKey: "item_id",
        });
    }*/

    return Order;

}

