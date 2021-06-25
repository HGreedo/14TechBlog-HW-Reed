const { Blogs } = require('../models');

const blogsData = [
    {
        blogs_name: "",
        date_posted: '',
        userName: "",
        content: "",
    },
];

const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs;