//const http = require('http')
const app = require('./app')
const config = require('./utils/confing')
 

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto ${PORT}`)
})