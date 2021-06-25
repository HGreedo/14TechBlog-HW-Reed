const { Users } = require('../models');

const usersData = [
    {
        fullName: "",
        userName: "",
        email: "",
        password: "",

    },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;