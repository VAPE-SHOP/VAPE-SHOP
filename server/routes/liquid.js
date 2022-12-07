const express = require('express');
const router = express.Router();
const {
  saveLiquid,
  findOneLiquidById,
  findOneLiquidByName,
  findLiquid,
  updateLiquid,
  deleteLiquid,
} = require('../controller/liquid');

router.get('/getAll', findLiquid);
router.post('/add', saveLiquid);
router.get('/get-by-name', findOneLiquidByName);
router.get('/get-by-id/:id', findOneLiquidById);
router.put('/:id', updateLiquid);
router.delete('/:id', deleteLiquid);
module.exports = router;
