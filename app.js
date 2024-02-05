const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleweare/not-found");
require("dotenv").config();

//middleweare:
app.use(express.json()); //? to read the req body
app.use(express.static("./public"));
//routes:
app.get("/",(req,res)=>{
  res.send(`<h1>we are in goode shape</h1>`)
})
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port= process.env.PORT ||  3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server listen to port : ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
