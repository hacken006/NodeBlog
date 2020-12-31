const express = require('express')
const app = express()
// Express port
const port = 3033
// Morgan logger
const morgan = require('morgan')
// Handlebar template engine
const handlebar = require('express-handlebars')
// Path for static file and set views multiple
const path = require('path')
// Call route
const route = require('./routes')

//////////////////////////////////////////////////////////////

// Using get value for [POST] req.body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//////////////////////////////////////////////////////////////

// Static file
// http://localhost/img/logo.png
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

//////////////////////////////////////////////////////////////

//Template engine
app.engine('hbs', handlebar({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
  //Set views folder
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'))

//////////////////////////////////////////////////////////////

//Routes init
route(app)

//////////////////////////////////////////////////////////////

// Start server on port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})