import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./components/index";
import Header from "./components/header";
import Menu from "./components/menus";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { header: false, component: null };
  }

  changeHeaderState(_, newValue) {
    this.setState({ header: newValue });
  }

  changeComponent(_, newValue) {
    this.setState({ component: newValue });
  }

  render() {
    const indexComp = props => <Index {...props} />;
    return (
      <Router>
        <Header
          value={this.state.header}
          onChange={this.changeHeaderState.bind(this)}
          onChangeMenu={this.changeComponent.bind(this)}
        />
        <Route path="/" exact render={indexComp} />
        <Route path={"/" + this.state.component} component={Menu} />
      </Router>
    );
  }
}

export default App;
