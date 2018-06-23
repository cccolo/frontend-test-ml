import React, { Component } from 'react';
import './app.scss';
import Search from './components/search/search';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <div className="grid-container col-12 container">
          <div className="col-fit grid-item header">
            <Search {...this.props} />
          </div>
          <div className="col-10 body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
