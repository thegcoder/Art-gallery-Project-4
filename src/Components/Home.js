import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <h2>Vacation Planner App</h2>
          <Link to={'/destinations'}>
            <img src="https://clipart.wpblink.com/sites/default/files/wallpaper/aviation-clipart/477807/aviation-clipart-motion-477807-5448483.gif" alt="vacation"/>
          </Link>
        </div>
    );
  }
}
