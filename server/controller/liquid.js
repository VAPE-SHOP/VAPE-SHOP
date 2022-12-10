const Liquid = require('../models/liquid');

const saveLiquid = async (req, res) => {
  const newLiquid = new Liquid({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
  });
  try {
    await newLiquid.save().then((result) => {
      res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
const findLiquid = async (req, res) => {
  const allLiquid = await Liquid.find({});
  try {
    res.status(201).json(allLiquid);
  } catch (error) {
    res.status(500).json(error);
  }
  //   await Liquid.find({}, (err, result) => {
  //     err ? res.status(400).send(err) : res.status(200).send(result);
  //   });
};

const findOneLiquidById = async (req, res) => {
  const oneLiquid = await Liquid.findById(req.params.id);
  try {
    res.status(201).json(oneLiquid);
  } catch (error) {
    res.status(500).json(error);
  }
  //   await Liquid.find({ name: req.body.name }, (err, result) => {
  //     err ? res.status(400).send(err) : res.status(200).send(result);
  //   });
};
const findOneLiquidByName = async (req, res) => {
  const oneLiquid = await Liquid.find({ name: req.body.name });
  try {
    res.status(201).json(oneLiquid);
  } catch (error) {
    res.status(500).json(error);
  }
  //   await Liquid.find({ name: req.body.name }, (err, result) => {
  //     err ? res.status(400).send(err) : res.status(200).send(result);
  //   });
};
const updateLiquid = async (req, res) => {
  const update = await Liquid.findByIdAndUpdate(req.params.id, req.body);
  try {
    res.status(201).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
  //   await Liquid.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
  //     err ? res.status(400).send(err) : res.status(200).send(result);
  //   });
};

const deleteLiquid = async (req, res) => {
  await Liquid.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({ message: 'yayy deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
  //   await Liquid.findByIdAndDelete(req.params.id, (err, result) => {
  //     err ? res.status(401).send(err) : res.status(200).send(result);
  //   });
};

module.exports = {
  updateLiquid,
  saveLiquid,
  findLiquid,
  findOneLiquidByName,
  findOneLiquidById,
  deleteLiquid,
};
