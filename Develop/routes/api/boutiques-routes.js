const router = require('express').Router();
const {Blogs, Category, Users} = require('../../models');

//get all blogs 
router.get('/', (req, res) =>{

    Product.findAll({
        include: [
            Users,  
        ],
    })
.then((blogs) => res.json(blogs))
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

//get one blog 
router.get('/:id', (req, res) => {
    Blogs.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            Users,
        
        ],
    })
    .then((products) => res.json(products))
    .catch((err) =>{
        console.log(err);
        res.status(400).json(err);
    });
});

//create new blog post 
router.post('/', (req, res) =>{
    
    Blogs.create(req,body)
    .then((blogpost) => {
        return {
            blogs_id: blogs.id,
        };
    });
    res.status(200).json(blogpost);
});
router.put('/:id', (req, res) => {
    Blogs.update(req.body,{
        where: {
            id: req.params.id,
        },
    })

});
router.delete('/:id', (req, res) =>{
    Blogs.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((blogs) => {
        console.log(blogs)
        res.json(blogs);
    })
    .catch((err) =>{
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;
