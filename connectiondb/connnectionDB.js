const mongoose =require('mongoose')
module.exports=()=>{
    mongoose.connect('mongodb+srv://hello:hello@cluster0.uiawcor.mongodb.net/project').then((result)=>{
        console.log('>>>successful connected');
    }).catch((error)=>{
        console.log('error',error);
    })
}