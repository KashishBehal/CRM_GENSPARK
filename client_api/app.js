

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

const TicketRouter=require("./src/routers/ticket.router");
app.use("/ticket" , TicketRouter);
app.use("/" ,(req , res ,next)=>{res.json({message:"HI There"})});
app.listen(port ,()=>{
    console.log(`API IS READY ON PORT NUMBER :${port}`);
});
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =  "mongodb+srv://kashishbehal8:2BX6by68tFMmFHOw@cluster0.gus2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
   
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 30000, 
  socketTimeoutMS: 30000,
});

async function run() {
  try {
    await client.connect();
    await client.db("abc").command({ ping: 1 });
    console.log("You successfully connected to MongoDB Finally!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);