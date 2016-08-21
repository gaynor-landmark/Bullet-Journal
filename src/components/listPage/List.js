"use strict"
import React from 'react'
import { Link } from 'react-router'

import Item from '../common/Item'
import getRequest from '../../getRequest'


var testList = []
var url = 'http://localhost:8080'

module.exports = React.createClass({
  componentDidMount: function() {
      // get all the list items from the database
      getRequest(url + '/testList', this.dbSetState)
    },
    dbSetState: function (data, err) {
    testList = data
    this.setState({items: data})
  },

  render: function() {
    var rows = testList
      .map(function(item){
        return <Item key={item.itemText} itemText={item.itemText}/>
      })
    return (
      <div className='container-fluid'>
        <div className='col-lg-4' id='list'>
          <div>
            <ul className="nav nav-tabs" role="tablist">
              <li ><Link to='/'>List Index</Link></li>
              <li className='active'><Link to='/theList'>Selected List</Link></li>
              <li id='aboutTab'><Link to='/About'>About</Link></li>
            </ul>
          </div>
          <table width='100%' className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})
