const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// POST Method to add meunu items
router.post('/', async(req,res) =>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// GET method to get the Menu Items
router.get('/', async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:taste', async(req,res)=>{
    try{
        const taste = req.params.taste; //Extract the taste from the URL parameter
    // Find menu items based on the taste field
    const menuItems = await MenuItem.find({ taste: taste });

    if (menuItems.length > 0) {
      console.log("Menu items with taste fetched");
      res.status(200).json(menuItems);
    }
    else{
        res.status(404).json({error: 'Invalid items with this taste'});
    }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

module.exports = router;