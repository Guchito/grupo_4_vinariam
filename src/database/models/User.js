module.exports = (sequelize, DataTypes) => {
    const alias = "User"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        }, 
        rol: {
            type: DataTypes.INTEGER
        },
        dob: {
            type: DataTypes.DATE
        },
        auth: {
            type: DataTypes.BOOLEAN
        }

    }
    const config = {
        tableName: "users",
        timestamps: true
    }


    const UserModel = sequelize.define(alias, cols, config);

    UserModel.associate = function(models){
        UserModel.hasMany(models.Order,{
            as: "orders",
            foreignKey: "user_id",
        });
        UserModel.hasMany(models.Item, {
            as: "items",
            foreignKey: "user_id",
        });
    }


    return UserModel;

}