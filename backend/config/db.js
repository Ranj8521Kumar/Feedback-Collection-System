const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology : true,
        });
        console.log('mongoDB connected');
    }catch(error){
        console.error('Error', error);
        process.exit(1);
    }
};

module.exports = connectDB;