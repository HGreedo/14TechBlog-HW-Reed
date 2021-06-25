const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/authorization');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComm = await Comment.create({ ...req.body, userId: req.session.userId, });
    
    res.json(newComm);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
