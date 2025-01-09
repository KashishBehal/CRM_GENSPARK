import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./src/routers/user.router"; // Updated import path
import ticketRouter from "./src/routers/ticket.router"; // Added ticket router
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hi There" });
});
app.use("/user", userRouter); // Use user router
app.use("/ticket", ticketRouter); // Use ticket router
// Start Server
app.listen(port, () => {
    console.log(`API IS READY ON PORT NUMBER: ${port}`);
});
// MongoDB Connection
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI || "your-mongodb-uri-here";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
