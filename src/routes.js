"use strict"

import React from 'react'
import { Router,  Route, browserHistory, DefaultRoute } from 'react-router'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={require('./components/App')}/>
    <Route path='index' component={require('./components/indexPage/Index')}/>
    <Route path="about" component={require('./components/aboutPage/About')}/>
    <Route path="theList" component={require('./components/listPage/List')}/>
  </Router>
)
