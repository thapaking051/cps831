const registerUser = require('./registerUser')
const add = require('./invoke')
const query = require('./query')
const login = require('./login')
const change = require('./change')

const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
    const response = registerUser.registerUser(req.body['username'])
    response.then(function(result) {
        res.send(result)
     })
})

app.post('/add', (req, res) => {
    body = req.body
    const response = add.addToBlockchain(body['username'], body['id'], body['price'], body['location'], body['type'], body['owner'])
    response.then(function(result) {
        res.send(result)
     })
})

app.get('/query', (req, res) => {
    const response = query.queryBlockchain()
    response.then(function(result) {
        res.send(result)
     })
})

app.post('/login', (req, res) => {
    response = login.login(req.body['username'])
    response.then(function(result) {
      res.send(result)
   })
})

app.post('/change', (req, res) => {
  body = req.body
  response = change.change(body['username'], body['id'], body['price'], body['location'], body['type'], body['owner'])
  response.then(function(result) {
    res.send(result)
 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})