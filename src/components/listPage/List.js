"use strict"
import React from 'react'
import Nav from '../common/Nav'
import Item from '../common/Item'
import getRequest from '../../getRequest'


var testList = []
var url = 'http://localhost:8080'

module.exports = React.createClass({
  componentDidMount: function() {
      // get all the list items from the database
      console.log('componentDidMount', url)
      getRequest(url + '/testList', this.dbSetState)
    },
    dbSetState: function (data, err) {
     console.log('setstate',err, data)
    testList = data
    this.setState({items: data})
  },

  render: function() {
    console.log('state', this.State, testList)
    var rows = testList
      .map(function(item){
        return <Item key={item.itemText} itemText={item.itemText}/>
      })
    return (
      <div className='container-fluid'>
        <div className='col-lg-4'>
          <Nav />
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
