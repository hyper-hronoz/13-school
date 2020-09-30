const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT =  3000

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/curse/:curseId', (req, res) => {
  if (fs.existsSync(`./views/${req.params.curseId}.pug`)) {
    res.render(req.params.curseId)
  } else {
    res.render('404')
  }
})

app.get('/teachers', (req, res) => {
  res.render('teachers')
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log('server is started on port 3000')
})
