import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/all/artists';

export default class Artists extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
          const artists = res.data;
          this.setState({artists});
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
          <h2>Artists</h2>
          <Link to={`/artist/create`}><h3>Create Artist</h3></Link>
          {this.state.artists.map((artist, index) => {
            return (
              <div key={artist._id}>
                <div className="displayText">
                  {artist.name}
                </div>
                <div className="profileImage">
                  <Link to={`/artist/${artist._id}`}>
                    <img src={artist.imageUrl} alt={artist.name} />
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
