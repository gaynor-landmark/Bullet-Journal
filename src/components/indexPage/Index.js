"use strict"
import React from 'react'
import { Link } from 'react-router'
import Nav from '../common/Nav'

module.exports = React.createClass({
  render : function () {
    console.log('rendering IndexPage')

    return (

        <div className='col-lg-4' id='index'>
          <div>
            <ul className="nav nav-tabs" role="tablist">
              <li className='active'><Link to='/'>List Index</Link></li>
              <li id='listTab'><Link to='/theList'>Selected List</Link></li>
              <li id='aboutTab'><Link to='/About'>About</Link></li>
            </ul>
          </div>
          <h1>INDEX</h1>
        </div>

    )
  }
})
