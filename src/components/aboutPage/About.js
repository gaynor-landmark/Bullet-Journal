"use strict"

import React from  'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render : function () {
    console.log('rendering IndexPage')
    return (
      <div className='container-fluid'>
        <div className='col-lg-4' id='about'>
          <div>
            <ul className="nav nav-tabs" role="tablist">
              <li id='indexTab'><Link to='/'>List Index</Link></li>
              <li id='listTab'><Link to='/theList'>Selected List</Link></li>
              <li className='active'><Link to='/About'>About</Link></li>
            </ul>
          </div>
          <h1>About this journal</h1>
        </div>
      </div>
    )
  }
})
