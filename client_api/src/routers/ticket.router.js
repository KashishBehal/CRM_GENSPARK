const express=require("express");
const {InsertTicket}=require('../../model/Ticket.model')
const router=express.Router();
// router.all("/" ,(req , res , next)=>{
//     res.json({message:"return from ticket router"});
// })
router.post("/" ,async(req , res)=>{
    const {subject , sender , message}=req.body;
    console.log({subject , sender  , message});
   const ticketObj={
    clientId:"12345" ,
    subject ,
    conversations:[
        {
            sender ,
            message ,
        },
    ],
   };
   const result=await InsertTicket(ticketObj);
   if(result){
    return res.json({status:'success' , message:"New Ticket has been created"});
   }
   console.log(result);
    res.json({message:"error try again laterrrrrrrrrrrrrrrr"});
})
module.exports=router; 