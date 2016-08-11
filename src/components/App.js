import React from 'react'
var RouteHandler = require('react-router').RouterHandler

import IndexPage from './indexPage/IndexPage'

module.exports = React.createClass({
  render: function(){
    return (
      <div className='container-fluid'>
          <IndexPage />
      </div>
    )
  }
})
