const connection=require("../data/db")
//index
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
//show
const show = (req,res) => {
    const {id} = req.params;

    const sqlMovie = `SELECT M.*, ROUND(AVG(R.vote)) AS average_vote 
    FROM movies M
    LEFT JOIN reviews R ON R.movie_id = M.id 
    WHERE M.id = ?`;

  
    const sqlReviews = `SELECT * FROM reviews WHERE movie_id = ?`

    connection.query(sqlMovie, [id], (err,resultMovie) => {
        if(err) return res.status(500).json({error: `Errore nella query: ${err}`})
        
        
        if(resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({error: "Film non trovato"});

        const movie = resultMovie[0];
        movie.image = req.imagePath + movie.image;
        movie.average_vote = parseInt(movie.average_vote);

        connection.query(sqlReviews, [id], (err, resultReviews) => {
            if(err) return res.status(500).json({error: `Errore nella query: ${err}`})

                const movieWithReviews = {
                    ...movie,
                    reviews: resultReviews
                }
                res.send(movieWithReviews)
        })

    })
}



