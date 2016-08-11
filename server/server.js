'use strict'
var express = require('express')
var path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')

var routes = require('./routes')

const app = express()

routes(app)

app.use(express.static(path.join(__dirname,'../public')))

app.use(bodyParser.json())

if (require.main === module) {
  app.set('port', 8080)
  const server = app.listen(app.get('port'), () => {
    console.log('Listening on port ' + server.address().port)
  })
}
