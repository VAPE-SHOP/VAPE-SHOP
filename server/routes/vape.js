const express =require('express'); 
const {savevape,get,put,deletevipe} = require('../controller/vape')
const router = express.Router();
router.post('/add', savevape);
router.get('/get', get);
router.put('/:id', put)
router.delete('/:id', deletevipe)
module.exports = router;