import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

//const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class ArtistData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/artists/${id}`)
      .then(res => {
        this.setState({ artist: res.data });
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
        <h2>Artist: {this.state.artist.name}</h2>
        <div className="profileImage">
          <img src={this.state.artist.imageUrl} alt={this.state.artist.name} />
        </div>
        <div>
          Email: {this.state.artist.bio}
        </div>
        <Link to={{ pathname:`/artist/edit/${this.state.artist._id}`, state: { artist: this.state.artist } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/artist/delete/${this.state.artist._id}`, state: { artist: this.state.artist } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
