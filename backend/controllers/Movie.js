const Movie = require("../models/MovieModel");
const moviesJSON = require("../config/movie.json");


exports.movieFilter = async(req,res)=>{
    try{
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

        // fetch genre from database -> (hardcoded)
        const genreOptions = ["Action", "Romance", "Thriller", "Crime" || "Music", "Family", "Fantasy", "Drama"];


        genre === "All" 
            ? (genre = [...genreOptions])
            : (genre = req.query.genre.split(","));
        
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);


        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]] = sort[1];
        }
        else{
            sortBy[sort[0]] = "asc";
        }


        const movies = await Movie.find({name: {$regex: search, $options: "i"}})
        .where("genre")
        .in([...genre])
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit)

        
        console.log(movies);

        
        const total = await Movie.countDocuments({
            genre: {$in: [...genre]},
            name: {$regex: search, $options: "i"}
        });

        
        const response = {
            error: false,
            total,
            page: page+1,
            limit,
            genres: genreOptions,
            movies,
        }

        return res.status(200).json({
            success: true,
            message: "successfully fetched",
            data: response,
        })
        




    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            err: err.message,
        })
    }
}








const insertMovies = async(req,res)=>{
    try{
        const docs = await Movie.insertMany(moviesJSON);


        console.log("Movie inserted successully");

        return docs;

    }
    catch(err){
        console.log(err);
    }
}

// insertMovies()
// .then((docs)=> console.log(docs))
// .catch((docs)=> console.log(docs))

