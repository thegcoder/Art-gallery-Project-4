import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

//const api = 'https://vacation-planner-api.herokuapp.com/api/all/destinations';

export default class ArtWorks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artWorks: []
    }
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
          const artWorks = res.data;
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
                </div>
              </div>
            )
          })}
        </div>
    );
  }
}
