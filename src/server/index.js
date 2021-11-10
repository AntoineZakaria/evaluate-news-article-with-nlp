

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



const routes = require('./routes/routes')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'))


app.use('',routes)


const PORT =3000
app.listen(PORT, (error) => {
  if (error) throw new Error(error)
  console.log(`Server listening on port ${PORT}`)
})

module.exports = {
  app,
}