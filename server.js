const express = require('express')
const axios = require('axios')
const parser = require('body-parser')

const { users } = require('./endpoints')

const app = express()
const port = 3000

// Injeccion de Dependencias
const userHandlers = users({ axios })

// Parsea mensaje application/x-www-form-urlencoded a json
app.use(parser.urlencoded({ extended: false }))

// Parsea el mensaje a application/json
app.use(parser.json())

app.get('/', userHandlers.get)
app.post('/', userHandlers.post)
app.put('/:id', userHandlers.put)
app.delete('/:id', userHandlers.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})