import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './Components/Home';
import Destinations from './Components/Destinations';
import Users from './Components/Users';
import UserData from './Components/UserData';
import UserDelete from './Components/UserDelete';
import UserCreate from './Components/UserCreate';
import UserEdit from './Components/UserEdit';
import DestinationData from './Components/DestinationData';
import DestinationDelete from './Components/DestinationDelete';
import DestinationCreate from './Components/DestinationCreate';
import DestinationEdit from './Components/DestinationEdit';

import './App.css';

 export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to={'/'}><span className='nav-logo'>VP</span></Link></div>
            <div className='nav-item'><Link to={'/artworks'}>ArtWorks</Link></div>
            <div className='nav-item'><Link to={'/artists'}>Artists</Link></div>
            <div className='nav-item'><a href="https://vacation-planner-api.herokuapp.com/">API</a></div>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/artworks' component={Artworks} />
              <Route path='/artwork/delete/:id' component={ArtworkDelete} />
              <Route path='/artwork/create' component={ArtworkCreate} />
              <Route path='/artwork/edit/:id' component={ArtworkEdit} />
              <Route path='/artwork/:id' component={ArtworkData} />
              <Route exact path='/users' component={Artists} />
              <Route path='/artist/delete/:id' component={ArtistDelete} />
              <Route path='/artist/create' component={ArtistCreate} />
              <Route path='/artist/edit/:id' component={ArtistEdit} />
              <Route path='/artist/:id' component={ArtistData} />
              <Route exact path='/genres' component={Genres} />
              <Route path='/genre/delete/:id' component={GenreDelete} />
              <Route path='/genre/create' component={GenreCreate} />
              <Route path='/genre/edit/:id' component={GenreEdit} />
              <Route path='/genre/:id' component={GenreData} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
