import React from 'react'
var RouteHandler = require('react-router').RouterHandler

import Index from './indexPage/Index'


module.exports = React.createClass({
  render: function(){
    return (
      <div className='container-fluid'>
          <Index />

      </div>
    )
  }
})
