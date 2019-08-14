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
            <div className='nav-item'><Link to={'/destinations'}>Destinations</Link></div>
            <div className='nav-item'><Link to={'/users'}>Users</Link></div>
            <div className='nav-item'><a href="https://vacation-planner-api.herokuapp.com/">API</a></div>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/destinations' component={Destinations} />
              <Route path='/destination/delete/:id' component={DestinationDelete} />
              <Route path='/destination/create' component={DestinationCreate} />
              <Route path='/destination/edit/:id' component={DestinationEdit} />
              <Route path='/destination/:id' component={DestinationData} />
              <Route exact path='/users' component={Users} />
              <Route path='/user/delete/:id' component={UserDelete} />
              <Route path='/user/create' component={UserCreate} />
              <Route path='/user/edit/:id' component={UserEdit} />
              <Route path='/user/:id' component={UserData} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
