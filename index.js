const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static("./public/index.html"))
app.use(require("./routes/recipeRoutes"))


const port = process.env.PORT || 4000

// app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})