const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require ("cors")
const imagePathMiddleware = require ("./middlewares/imagePathMiddleware")
const movieRouter = require("./routers/movieRouter")

app.get('/', (req, res) => {
res.send('Rotta base')
})
app.use("/api/movies",movieRouter)
app.use(cors({origin:process.env.FE_APP}))
app.use(imagePathMiddleware)
app.use(express.json())
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

