const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/curse/:curseId', (req, res) => {
  console.log(req.params.curseId)
  res.render(req.params.curseId)
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(3000, () => {
  console.log('server is started on port 3000')
})
