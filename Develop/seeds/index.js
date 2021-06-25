const seedUsers = require('./users-seeds');
const seedBlogs = require('/blogs-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- USERS SEEDED -----\n');

    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');

    process.exit(0);
};

seedAll();