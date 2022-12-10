const express =require('express'); 
const {savevape,get,put,deletevipe,findOneVape} = require('../controller/vape')
const router = express.Router();
router.post('/add', savevape);
router.get('/getall', get);
router.put('/:id', put)
router.delete('/:id', deletevipe)
router.get('/:name',findOneVape)
module.exports = router;