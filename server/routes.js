"use strict"

module.exports = function routes(app) {

   app.get('/', function(req, resp){
     resp.send('the Bullet Journal')
   })

   var testList = [
    {
      itemText: "first list item",
      date: new Date("2016-07-01")
    },
    {
      itemText: "second list item",
      date: new Date("2016-07-03")
    },
    {
      itemText: "third list item",
      date: new Date("2016-07-02")
    }
  ]
  app.get('/testList', function(req, resp) {
  //  console.log('in server get testList')
    resp.send(testList)
  })

}
