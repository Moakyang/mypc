import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from './components/index'
import Header from './components/header'

import './reset.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {'header': 0}
  }

  changeHeaderState (_, newValue) {
    this.setState({'header': newValue})
  }

  render() {
    const indexComp = (props) => <Index {...props} selectedHeader={this.state.header} />
    return (
      <Router>
        <Header value={this.state.header} onChange={this.changeHeaderState.bind(this)} />
        <Route path='/' exact render={indexComp} />
      </Router>
    );
  }
}

export default App
