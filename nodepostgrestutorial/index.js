const express = require('express')
const bodyParser = require('body-parser')
const query = require('./query.js')
var cors = require('cors');
const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.get('/', (request, response) => {
                  response.json({info: 'info goes here'})
                  }
       )

app.get('/users', query.getUsers)

app.get('/users/:id', query.getUserByID)

app.listen(port, () => {console.log('App running on port ${port}')})
