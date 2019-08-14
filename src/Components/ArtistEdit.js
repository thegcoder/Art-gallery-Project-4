import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

//const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class ArtistEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bio: '',
      id: '',
      name: '',
      imageUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'bio':
        this.setState({bio: event.target.value});
        break;
      case 'imageUrl':
        this.setState({imageUrl: event.target.value});
        break;
      case 'name':
        this.setState({name: event.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    const id = this.state.id;

    axios.post(`${api}update/artists/${id}`, data)
      .then(res => {
        history.push(`/artist/${res.data._id}`);
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
          <h2>Edit Artist</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="formItem">
              <div>{this.state.name}</div>
              <label>Name:</label>
              <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="formItem">
              <div>{this.state.bio}</div>
              <label>Bio:</label>
              <input type="text" name="bio" placeholder={this.state.bio} onChange={this.handleChange}/>
            </div>
            <div className="formItem">
              <div>{this.state.imageUrl}</div>
              <label>Image Url:</label>
              <input type="text" name="imageUrl" placeholder={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <button className='search-btn'>Submit</button>
            <Link to={`/artist/${this.state.id}`}><input type="button" value="Cancel" className='search-btn' /></Link>
          </form>
        </div>
    );
  }
}
