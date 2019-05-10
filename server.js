const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.get('/status', (req, res) => {
  res.json({
    message: 'this is status router'
  })
})

app.get('/error', (req, res) => {
  res.json({
    message: 'this is  Error router'
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
}) 