const express = require('express')
const app = express()
const port = 3033
const morgan = require('morgan')
const handlebar = require('express-handlebars')
const path = require('path')

// Static file
// http://localhost/img/logo.png
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebar({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
  //Set views folder
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})