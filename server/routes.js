"use strict"

module.exports = function routes(app) {

   app.get('/', function(req, resp){
     resp.send('the Bullet Journal')
   })

}
