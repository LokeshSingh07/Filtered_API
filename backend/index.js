// server instantiate
const express = require("express");
const app = express();


// load config file from env
require("dotenv").config();
const PORT = process.env.PORT || 8080;


// import required controllers/files
const cors = require("cors");
 





// ________ middleware to parse json request body
app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)



// __________________import routes
const movieRoute = require("./routes/movieRoute");

// _________mount/add the API routes
app.use("/api", movieRoute);







// SERVER START & DATABSE CONNECTION
const {DBConnect} = require("./config/DBConnect");
DBConnect();

app.listen(PORT, () => (
    console.log(`Example app listening on port ${PORT}!`)
))

// default routes
app.get('/', (req, res) => {
    res.send('Hello World!')}
)