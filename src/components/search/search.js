import React, { Component } from 'react';
require('./search.scss');

class Search extends Component {
  render() {
    return (
      <div className="search-box">
        <a className="logo" href="//www.mercadolibre.com.ar"
            tabIndex="1">
        </a>
        <input type="text" className="search-input"
            name="as_word" placeholder="Nunca dejes de buscar"
            maxLength="120" autoFocus="" autoCapitalize="off"
            autoCorrect="off" spellCheck="false" tabIndex="2" autoComplete="off" />
        <button type="submit"
            className="search-btn"
            tabIndex="3">
          <p className="icon-search"></p>
        </button>
      </div>
    );
  }
}

export default Search;