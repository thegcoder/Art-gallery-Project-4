import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/';

export default class ArtistData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artWork: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/artworks/${id}`)
      .then(res => {
        this.setState({ artWork: res.data });
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
        <h2>Artwork: {this.state.artWork.name}</h2>
        <div>
          <div className="displayImage">
            <img src={this.state.artWork.imageUrl} alt={this.state.artWork.name}/>
          </div>
          <p>{this.state.artWork.description}</p>
        </div>
        <Link to={{ pathname:`/artwork/edit/${this.state.artWork._id}`, state: { artWork: this.state.artWork } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/artwork/delete/${this.state.artWork._id}`, state: { artWork: this.state.artWork } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
