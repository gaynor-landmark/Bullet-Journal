"use strict"
import React from 'react'
import Nav from '../common/Nav'

module.exports = React.createClass({
  render: function() {
    return (
      <div className='container-fluid'>
      <div className='col-lg-4'>

        <Nav />
        <p>the list you selected will be displayed here</p>
      </div>
      </div>
    )
  }
})
