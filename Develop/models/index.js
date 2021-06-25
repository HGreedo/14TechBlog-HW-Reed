//importing models
const Users = require('./Users');
const Blogs = require('./Blogs');

//Blogs belongs to Users
Blogs.belongsTo(Users, {
    foreignKey: 'Users_id',
    onDelete: 'CASCADE',
});
//Users can have many Blogs
Users.hasMany(Blogs, {
    foreignKey: 'Blogs_id',
});
module.exports = {
    Blogs,
    Users,
};