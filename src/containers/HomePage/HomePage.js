import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div id="home-page">
        <h3>Welcome to the home page</h3>

        <Link to="/demo">View Demo</Link>
      </div>
    );
  }
}

export default HomePage;

