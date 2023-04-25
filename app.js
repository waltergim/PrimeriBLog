const config      = require('./utils/confing')
const express     = require('express')
const app         = express()
const cors        = require('cors')
const blogRouter  = require('./controllers/blogsrute')
const mongoose    = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
        .then(()=>{
            console.log('conectado a mongoose')
        })
        .catch((error) => {
            console.log('error connecting to MongoDB:', error.message)
        })


app.use(cors())             
app.use(express.json())

app.use('/api/', blogRouter)

module.exports = app
