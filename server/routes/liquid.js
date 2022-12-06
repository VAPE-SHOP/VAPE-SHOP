const express = require('express');
const router = express.Router();
const {
  saveLiquid,
  findLiquid,
  findOneLiquid,
  updateLiquid,
  deleteLiquid,
} = require('../controller/liquid');

router.get('/getAll', findLiquid);
router.post('/add', saveLiquid);
router.get('/get', findOneLiquid);
router.put('/:id', updateLiquid);
router.delete('/:id', deleteLiquid);
module.exports = router;
