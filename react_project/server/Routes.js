const express = require('express');

const router = express.Router();

// router.post('/', async (req,res)=>{

// })

router.get('/data', async (req,res)=>{
    try {
        await res.json(data)
    } catch (error) {
        console.error(error);  
        
    }
})