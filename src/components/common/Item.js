import React from 'react'

module.exports = React.createClass({

  handleClick: function () {
    console.log("handling the click")
  },

  render: function() {
    console.log(this.props)
    return (
      <tr>
        <td>&bull; </td>
        <td><a href="#" onClick={this.handleClick}> {this.props.itemText}</a ></td>
      </tr>
    )
  }

})
