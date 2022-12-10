const express = require('express');
const router = express.Router();
const {
  Login,
  Register,
 
} = require('../controller/user');

// router.get('/:id', getUserById);
router.post('/signup', Register);
router.post('/login', Login );
// router.patch('/:id', updateUser);
module.exports = router;
