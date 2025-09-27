const express = require('express')
const app = express()
const port = 3000
const list = {
////////
}
app.get('/', (req, res) => {
res.send('Rotta base')
})
app.use("/api/movie",movieRouter)
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

