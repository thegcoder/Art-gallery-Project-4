import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/';

export default class ArtistDelete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bio: '',
      id: '',
      name: '',
      imageUrl: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    const id = this.state.id;

    axios.post(`${api}delete/artists/${id}`, data)
      .then(res => {
        history.push(`/artists`);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/artists/${id}`)
      .then(res => {
        this.setState({
          bio: res.data.bio,
          id: res.data._id,
          name: res.data.name,
          imageUrl: res.data.imageUrl
        });
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
          <h2>Delete Artist</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>{this.state.imageUrl}</div>
            </div>
            <div>
              <div>{this.state.name}</div>
            </div>
            <div>
              <div>{this.state.bio}</div>
            </div>
            <button className='search-btn'>Submit</button>
            <Link to={`/artist/${this.state.id}`}><input type="button" value="Cancel" className='search-btn' /></Link>
          </form>
        </div>
    );
  }
}
