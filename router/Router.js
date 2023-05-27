const {Router:MainRouter}=require('express')
const Product=require('../model/Product');
const guid = require('guid');
const Router=MainRouter()


Router.get('/products',async (req,res)=>{
    try {
        const products = await Product.find(); 
        res.json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})
Router.post('/add/product',async (req,res)=>{
    try{
        const aded=new Product({...req.body})
        const message=await aded.save()
        res.json({message})
    }catch(err){
        console.log(err);
        res.status(500).send('Error creating product'+err.message)
    }
})
Router.get('/product/:id',async (req, res)=>{
    try{
      const product = await Product.findOne({"_id":req.params.id});
      res.json(product);
    }catch(err){
      res.send(err);
    }
});
Router.delete('/product/:id',async (req,res)=>{
    try{
      const product = await Product.deleteOne({"_id":req.params.id});
      res.json(product);
    }catch(err){
      res.send(err);
    }
})
Router.put('/product/update',async (req,res)=>{
    try{
        const product=await Product.updateOne({_id:req.body.id},{$set:{title:req.body.title}})
        console.log(product);
        res.json(product)
    }catch(err){
        console.log(err);
        res.json({message:err.message})
    }
})
module.exports=Router