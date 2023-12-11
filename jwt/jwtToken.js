const users_models =require("../model/users_models")
const  jwt=require("jsonwebtoken")

module.exports={
    tokengenerate:async(id)=>{  
try {
    const secretkey="654321"
    const token = await jwt.sign({_id:id},secretkey,{
    })
    return jwt.verify(token ,secretkey,async(err, decode)=>{
        console.log(decode,"decode");
        if(err){
            throw err
        }
        try {
            const time=math.floor(date.now()/1000)
            console.log(time,"time");
            await users_models.findByIdAndUpdate({
                _id:decode._id
            },
            {logintime: decode,token:token},
            { new:true
            })
        } catch (error) {
            console.log(error);
        }
    })
} catch (error) {
    console.log(error);
}
    }
}