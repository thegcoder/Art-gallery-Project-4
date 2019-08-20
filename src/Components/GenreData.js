import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/';

export default class GenreData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/genres/${id}`)
      .then(res => {
        this.setState({ genre: res.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <h2>Genre: {this.state.genre.name}</h2>
        <div>
          <div className="displayImage">
            <img src={this.state.genre.imageUrl} alt={this.state.genre.name}/>
          </div>
          <p>{this.state.genre.description}</p>
        </div>
        <Link to={{ pathname:`/genre/edit/${this.state.genre._id}`, state: { genre: this.state.genre } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/genre/delete/${this.state.genre._id}`, state: { genre: this.state.genre } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
