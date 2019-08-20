import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/all/genres';

export default class Genres extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Genres: []
    }
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
          const Genres = res.data;
          this.setState({ Genres });
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
          <h2>Genres</h2>
          <Link to={`/genre/create`}><h3>Create Genre</h3></Link>
          {this.state.Genres.map((genre, index) => {
            return (
              <div key={genre._id}>
                <div className="displayText">
                  {genre.name}
                </div>
                <div className="profileImage">
                  <Link to={`/genre/${genre._id}`}>
                    <img src={genre.imageUrl} alt={genre.name} />
                  </Link>
                </div>
                <hr/>
              </div>
            )
          })}
        </div>
    );
  }
}
