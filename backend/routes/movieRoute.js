const express = require("express");
const router = express.Router();


// import controllers
const { movieFilter } = require("../controllers/Movie");



// API route
router.get("/movies", movieFilter);



// export router
module.exports = router;