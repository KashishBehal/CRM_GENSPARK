
require("dotenv").config();
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const cors=require("cors");
const helemet=require("helmet");
const morgan=require("morgan");

app.use(helemet());
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const port=process.env.PORT ||3001;

const userRouter=require("./src/routers/userr");
app.use("/user" , userRouter);

const TicketRouter=require("./src/routers/ticket.router");
app.use("/ticket" , TicketRouter);
app.use("/" ,(req , res ,next)=>{res.json({message:"HI There"})});
app.listen(port ,()=>{
    console.log(`API IS READY ON PORT NUMBER :${port}`);
})