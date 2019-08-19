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

    axios.get(`${api}read/artWorks/${id}`)
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
      //  <h2>City: {this.state.artWork.city}</h2>
        <div>
          <div className="displayImage">
            <img src={this.state.artwork.imageUrl} alt={this.state.artWork.name}/>
          </div>
        //  <h3>Country: {this.state.destination.country}</h3>
          <p>{this.state.destination.description}</p>
        </div>
        <Link to={{ pathname:`/artWork/edit/${this.state.artWork._id}`, state: { artWork: this.state.artWork } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/artWork/delete/${this.state.artWork._id}`, state: { artWork: this.state.artWork } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
