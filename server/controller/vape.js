const Vape =require('../models/vape')  

const savevape = async(req,res) => { 
const newVape = new Vape({
  name: req.body.name,
  price: req.body.price,
  description: req.body.description,
  image: req.body.image,
});
try {
  await newVape.save().then((result) => {
    res.status(201).json(result);
  });
} catch (error) {
  res.status(500).json(error);
} 
} 


  const get =  async (req,res) => {
const allVape =  await Vape.find({})
   try {
    res.status(200).send(allVape)
    
   } catch (error) {
    res.status(401).send(error)
   }
  } 
  const findOneVape = async (req, res) => {
    const onevape = await Vape.findOne({ name: req.params.name });
    try {
      res.status(201).json(onevape);
    } catch (err) {
      res.status(500).json(err);
    }
    
  };



  
  const deletevipe = async(req,res) =>{ 
    try { 
      await Vape.findOneAndDelete({id:req.params.id})
      res.send('yeey')
    }
    catch (err){
      console.log(err)
    }
  }

  const put =async(req,res) =>{ 
    try { 
      await Vape.findOneAndUpdate({id:req.params.id},{
        name : req.body.name,
        descripition : req.body.descripition,
        image: req.body.image,
        price: req.body.price
      })
      res.send('yeey')
    }
    catch (err){
      console.log(err)
    }
  }




  
      module.exports = {savevape,get,put,deletevipe,findOneVape}