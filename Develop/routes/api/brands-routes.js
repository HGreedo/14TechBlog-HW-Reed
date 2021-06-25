const router = require('express').Router();
const { Users, Blogs } = require('../../models');

//find all Users
router.get('/', (req,res) =>{
    Users.findAll({
        include: [Blogs],
    })
    .then((users) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});
//find one User by its id 
router.get('/:id', (req,res) =>{
    Users.findOne({
        where: {
            id: req.params.id,
        },
        include: [Blogs],
    })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(err));
});

//create a new user 
router.post('/', (req, res)=>{
    Users.create(req.body)
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
});
router.put('/:id', (req, res) => {
    Users.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
    Users.destroy({
        where: {
            id: req.params.id,        
        },
    })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
});

module.exports = router; 