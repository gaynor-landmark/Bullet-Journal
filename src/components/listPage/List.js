"use strict"
import React from 'react'
import Nav from '../common/Nav'

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />

        <p>the list you selected will be displayed here</p>
      </div>
    )
  }
})
