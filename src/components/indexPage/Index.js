"use strict"
import React from 'react'
import { Link } from 'react-router'
import Item from '../common/Item'
import getRequest from '../../getRequest'

let testIndex = []
var url = 'http://localhost:8080'

module.exports = React.createClass({
  componentDidMount: function() {
      // get all the index items from the database
      getRequest(url + '/testIndex', this.dbSetState)
    },
  dbSetState: function (data, err) {
    testIndex = data
    this.setState({index: data})
  },
  render : function () {
    var rows = testIndex.map (
      function(item){
        return <Item key={item.itemText} itemText={item.itemText}/>
      })

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
        <table width='100%' className='table'>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
})
