const express = require('express')

const app = express()

app.use(express.json())

app.post('/move', (req, res) => {
  res.status(201).send({position: 'W:1:1'})
})

module.exports = app
