import React, { Component } from 'react';
import './app.scss';
import Search from './components/search/search';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="grid-item grid-item-all">
            <Search {...this.props} />
          </div>
          <div className="grid-item grid-item-10">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
