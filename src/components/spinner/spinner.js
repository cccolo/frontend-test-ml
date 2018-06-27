import React, { Component } from 'react';
import './spinner.scss';

class Spinner extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div className="spinner"><div></div><div></div></div>
    );
  }
}

export default Spinner;