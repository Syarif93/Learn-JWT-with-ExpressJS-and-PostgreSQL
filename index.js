const express = require('express')
const app = express()
const cors =  require('cors')

// Middlewhare

app.use(express.json()) //req.body
app.use(cors())

// Routes //

// Register and login routes
app.use('/auth', require('./routes/jwtAuth'))

const port = 5000
app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})