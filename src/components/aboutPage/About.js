"use strict"

import React from  'react'
import Nav from '../common/Nav'

module.exports = React.createClass({
  render : function () {
    console.log('rendering IndexPage')
    return (
        <div className='col-lg-4 col-lg-offset-1'>
          <Nav />
          <h1>About this journal</h1>
        </div>

    )
  }
})
