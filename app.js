const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('server is started on port 3000')
})
