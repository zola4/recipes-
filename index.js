const express         = require('express')
const hbs             = require('express-handlebars')
const parser          = require('body-parser')
const methodOverride  = require('method-override')

const recipe    = require('./controllers/recipe')

const app           = express()

app.set('port', process.env.PORT || 3002)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout-main'
}))

app.use('/assets', express.static('public'))
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.get('/', (req, res) => {
  res.render('app-welcome')
})

app.use('/recipes', recipes)

app.listen(app.get('port'), () => {
  console.log('I am a server, listining your request!!!!')
})
