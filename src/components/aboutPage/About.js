"use strict"

import React from  'react'
import Nav from '../common/Nav'

module.exports = React.createClass({
  render : function () {
    console.log('rendering IndexPage')
    return (
  <div className='container-fluid'>
        <div className='col-lg-4'>
          <Nav />
          <h1>About this journal</h1>
        </div>
        </div>
    )
  }
})
