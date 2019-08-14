import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

//const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class ArtWorkEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      imageUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'description':
        this.setState({description: event.target.value});
        break;
      case 'imageUrl':
        this.setState({imageUrl: event.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    axios.post(`${api}create/artworks`, data)
      .then(res => {
        history.push(`/artwork/${res.data._id}`);
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
          <h2>Edit ArtWork</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="formItem">
              <div>Image Url: {this.state.imageUrl}</div>
              <input type="text" name="imageUrl" placeholder={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <div className="formItem">
              <div>Description: {this.state.description}</div>
              <input type="text" name="description" placeholder={this.state.description} onChange={this.handleChange}/>
            </div>
            <button className='search-btn'>Submit</button>
            <Link to={'/artworks'}><input type="button" value="Cancel" className='search-btn' /></Link>
          </form>
        </div>
    );
  }
}
