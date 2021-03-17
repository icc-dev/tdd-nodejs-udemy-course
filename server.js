const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const { authenticate } = require('./middlewares')

const { posts } = require('./endpoints')

const app = express()
const port = 3000

// Injeccion de Dependencias
const postsHandlers = posts({ axios })

// Parsea mensaje application/x-www-form-urlencoded a json
app.use(parser.urlencoded({ extended: false }))

// Parsea el mensaje a application/json
app.use(parser.json())

app.post('/', authenticate ,postsHandlers.post)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})