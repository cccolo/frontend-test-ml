import React, { Component } from 'react';
require('./spinner.scss');

class Spinner extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    );
  }
}

export default Spinner;