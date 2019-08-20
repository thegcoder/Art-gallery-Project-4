import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://art-gallery-project-api.herokuapp.com/api/all/artworks';

export default class ArtWorks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ArtWorks: []
    }
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
          const ArtWorks = res.data;
          this.setState({ ArtWorks });
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
          <h2>ArtWorks</h2>
          <Link to={`/artwork/create`}><h3>Create Artwork</h3></Link>
          {this.state.ArtWorks.map((artWork, index) => {
            return (
              <div key={artWork._id}>
                <div className="displayText">
                  {artWork.name}
                </div>
                <div className="profileImage">
                  <Link to={`/artwork/${artWork._id}`}>
                    <img src={artWork.imageUrl} alt={artWork.name} />
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
