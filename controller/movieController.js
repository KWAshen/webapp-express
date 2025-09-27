const connection=require("../data/db")

const index=(req,res)=>{
    const sql = "SELECT * FROM movies";

    connection.query(sql,(err,results)=>{
        if(err){
            return res.status(500).json({error: `Errore nella query: ${err}`})
        }

        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })

        res.send(movies);
    })
}