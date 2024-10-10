const express=require('express');
const router = express.Router();

const Feedback=require('../models/Feedback');

router.post('/submit-feedback', async (req,res)=>{
    const {firstName, lastName, email, phoneNumber, message, agreeToPolicies} = req.body;

    try{
        const newFeedback = new Feedback({
            firstName,
            lastName,
            email,
            phoneNumber,
            message,
            agreeToPolicies,
        });

        await newFeedback.save();
        res.status(201).json({message: `Feedback Submitted Successfully`, Feedback: newFeedback});
    }catch(error){
        res.status(400).json({message: 'Error Submitting feedback: ', error});
    }
});

module.exports = router;