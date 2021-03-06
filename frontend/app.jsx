import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './components/index'
import Header from './components/header'

import About from './components/menu/about'

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
        <Route path='/about' exact component={About} />
      </Router>
    )
  }
}

export default App
