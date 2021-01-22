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
    
    Order.associate = function(models){
        Order.belongsTo(models.User,{
            as: "user",
            foreignKey: "user_id"
        });
        Order.hasMany(models.Item,{
            as: "items",
            foreignKey: "order_id",
        });
    }

    return Order;

}

