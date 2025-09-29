const express = require('express')
const app = express()
const port = 3000
const cors = require ("cors")
const imagePathMiddleware = require ("./middlewares/imagePathMiddleware")
const list = {
////////
}
app.get('/', (req, res) => {
res.send('Rotta base')
})
app.use("/api/movie",movieRouter)
app.use(cors({origin:process.env.FE_APP}))
app.use(imagePathMiddleware)
app.use(express.json())
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

