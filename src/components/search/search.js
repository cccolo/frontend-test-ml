import React, { Component } from 'react';
import logo from '../../assets/img/Logo_ML.png'
require('./search.scss');

class Search extends Component {

  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  search({ history }) {
    const path = `/items?search=${this.state.searchValue}`;
    history.push(path);
  }

  clearState() {
    window.location.href = '/';
  }

  handleKeyPress(event, props) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.search(props);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-box-container">
          <div className="col-1">
            <a className="logo" onClick={() => this.clearState()} tabIndex="1">
              <img src={logo} />
            </a>
          </div>
          <div className="col-2">
            <input
              value={this.state.searchValue}
              onChange={(e) => this.updateInputValue(e)}
              onKeyPress={(e) => this.handleKeyPress(e, this.props)}
              type="text" className="search-input"
              placeholder="Nunca dejes de buscar"
              maxLength="120" autoFocus=""
              spellCheck="false" autoComplete="off" tabIndex="2" />
            <button
              className="search-btn"
              type="submit"
              tabIndex="3">
              <p className="icon-search"></p>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;