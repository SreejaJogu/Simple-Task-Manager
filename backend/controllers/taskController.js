//const jwt = require('jsonwebtoken');
const User = require('../models/task');

exports.CreateTask = async(req, res) =>{
    try{
        const { title, description } = req.body;

    //user is a mongodb document
    const user = new User({
        title: title,
        description: description,
    });

    await user.save();

    res.status(201).json({
        success:true,
        data: user
    })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
