import React, { Component } from 'react';
import logo from '../../assets/img/Logo_ML.png';
import { withRouter } from 'react-router-dom';
import './search.scss';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInputValue(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  search(event) {
    event.preventDefault();
    this.props.history.push(`/items?search=${this.state.searchValue}`);
  }

  clearState() {
    this.setState({ searchValue: '' });
    this.props.history.push('/');
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.search(event);
    }
  }

  handleSubmit(event) {
    this.search(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-box-container">
          <div className="search-box_logo">
            <a onClick={() => this.clearState()} tabIndex="1">
              <img src={logo} />
            </a>
          </div>
          <div className="search-box_search">
            <input
              value={this.state.searchValue}
              onChange={(e) => this.updateInputValue(e)}
              onKeyPress={(e) => this.handleKeyPress(e)}
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

export default withRouter(Search);