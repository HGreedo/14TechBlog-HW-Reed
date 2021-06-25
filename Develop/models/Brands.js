const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
    },
    //defining columns
    users_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',   
    }
);

module.exports = Users;