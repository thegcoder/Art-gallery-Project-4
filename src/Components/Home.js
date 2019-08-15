import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <h2>Art Gallery Project</h2>
          <Link to={'/artworks'}>
            <img src="https://media.giphy.com/media/7bbxxRnX3G2WI/giphy.gif"
            alt="art"/>
          </Link>
        </div>
    );
  }
}
