import React, { Component } from 'react';
import logo from './assets/svg/logo.svg';
import './app.scss';
import Search from './components/search/search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      response: '',
    }

    this.callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="grid-item grid-item-all">
              <Search />
          </div>
          <div className="grid-item grid-item-5">
            Produc list
          </div>

        </div>
        
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>*/}
      </div>
    );
  }
}

export default App;
