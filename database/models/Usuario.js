module.exports = (sequelize, DataTypes) => {
    const alias = "User"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        type: {
            type: DataTypes.INTEGER

        },
        image: {
            type: DataTypes.STRING
        }, 
        dob: {
            type: DataTypes.DATE
        }

    }
    const config = {
        tableName: "users",
        timestamps: true
    }


    const User = sequelize.define(alias, cols, config);

    /*User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'user_id'
        })
    }*/

    return User;

}