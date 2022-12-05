const express = require('express');
const {
  login,
  signup,
  updateUser,
  getUserById,
} = require('../controller/user');
const router = express.Router();

router.get('/:id', getUserById);
router.post('/signup', signup);
router.post('/login', login);
router.patch('/:id', updateUser);
module.exports = router;
