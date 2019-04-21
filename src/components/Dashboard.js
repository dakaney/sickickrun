import React from 'react';
import Store from '../store/store';
import { firebase } from '../firebase/firebase';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
  // Name of user
  // game btn
  // store btn
  // logout btn

  // some kind of analytics:
    // items currently owned
    // how QTUM coins owned'
  openStore = () => {
    this.props.history.push('/store');
  }

  startLogout = () => {
    firebase.auth().signOut();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3" id='navBar'>
          <div className="container">
            <a href="/dashboard" className="brand-logo left red-text text-darken-2">SickickRun</a>
            <ul className="right">
              <li><NavLink className="button" to="/store">Store</NavLink></li>
              <li><NavLink className="button" onClick={this.startLogout}>Logout</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="center play">
          <a href='https://cjewett9907.github.io/ProjectFear/dist/'><img className="runningLogo" src={require('../assets/playButton.gif')} alt="loading..." /></a>
        </div>
        <div className="center">
          <a href='https://cjewett9907.github.io/ProjectFear/dist/'><button className="button red darken-2 btn-large">PLAY</button></a>
        </div>
      </div>
    )
  }
}

export default Dashboard;
