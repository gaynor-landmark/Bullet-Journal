"use strict"
import React from 'react'
import Nav from '../common/Nav'
import Item from '../common/Item'

var testList = [
  {
    itemText: "index list item  1",
    date: new Date("2016-07-21")
  },
  {
    itemText: "index list item  10",
    date: new Date("2016-07-23")
  },
  {
    itemText: "index list item  100",
    date: new Date("2016-07-22")
  }
]

module.exports = React.createClass({

  render: function() {
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
