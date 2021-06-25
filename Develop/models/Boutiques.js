const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Blogs extends Model {}

Blogs.init({
        //defining columns 
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    blog_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogs',
      }  
);
module.exports = Blogs;
    