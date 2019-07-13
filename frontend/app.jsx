import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './components/index'
import Header from './components/header'

import Jimin from './components/main/jimin'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { header: false }
  }

  changeHeaderState(newValue) {
    this.setState({ header: newValue })
  }

  render() {
    const indexComp = props => <Index {...props} />
    return (
      <Router>
        <Header
          value={this.state.header}
          onChangeHeader={this.changeHeaderState.bind(this)}
        />
        <Route path='/' exact render={indexComp} />
        <Route path='/jimin' exact render={indexComp} />
      </Router>
    )
  }
}

export default App
