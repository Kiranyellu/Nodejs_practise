var express = require('express');

var router = express.Router();

const Item = require ('../model/shoppinglist');

//retriving  the data means using get(read) method
router.get('/items',(req,res,next)=>{
     Item.find(function(err,items){
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
     })
})


//post the data or create the data

router.post('/item',(req,res,next)=>{
    let ShoppingItem = new Item({
        itemName: req.body.itemName,
        itemBought: req.body.itemBought,
        itemQuantity: req.body.itemQuantity
    }); 
    ShoppingItem.save((err,item)=>{
      if(err){
          res.json(err);
      }
      else{
          res.json({msg: 'data created successfully'});
      }
    });
});

// put the data

router.put('/item/:id',(req,res,next)=>{
    
    Item.findOneAndUpdate({_id: req.params.id},{
        $set:{
            itemName: req.body.itemName,
            itemBought: req.body.itemBought,
            itemQuantity: req.body.itemQuantity
        }
    },function(err,results){
        if(err){
            res.json(err)
        }
        else{
            res.json(results);
        }
    })
});

// delete the data

router.delete('/item/:id',(req,res,next)=>{
   Item.remove({_id: req.params.id},(err,results)=>{
       if(err){
           res.json(err)
       }
       else{
           res.json(results);
       }
   })
});

module.exports= router;