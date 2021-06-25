const router = require('express').Router();
const productRoutes = require('./api/blogs-routes');
const tagRoutes = require('./api/users-routes');
const frontRoutes = require('./front-end');

router.use('/blogs', productRoutes);
router.use('/users', tagRoutes);
router.use('/', frontRoutes);

module.exports = router;
