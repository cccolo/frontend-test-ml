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
        <div className="app__grid-container">
          <div className="app__grid-container-header">
            <Search />
          </div>
          <div className="app__grid-container-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
