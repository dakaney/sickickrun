import React from 'react';
import { firebase } from '../firebase/firebase';
import { NavLink } from 'react-router-dom';

class Store extends React.Component {
  openProfile = () => {
    this.props.history.push('/dashboard');
  }

  startLogout = () => {
    firebase.auth().signOut();
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3" id='navBar'>
          <div className="container">
            <a href="/dashboard" className="brand-logo left red-text text-darken-2">SickickRun</a>
            <ul className="right">
              <li><NavLink className="button button--link" to="/dashboard">Profile</NavLink></li>
              <li><NavLink className="button button--link" onClick={this.startLogout}>Logout</NavLink></li>
            </ul>
          </div>
        </nav>
        <h2 className="red-text text-darken-2 center">S!CK SHOP</h2>
        <h4 className="red-text text-darken-2">Disclaimer: under alpha test...coming soon.</h4>
        <div className="itemImages">
          <img className="legendary" src="https://assets.bigcartel.com/product_images/227538311/Dadhat3_boy.jpg?auto=format&fit=max&w=560" />
          <img className="rare" src="https://assets.bigcartel.com/product_images/226053943/Sick_mask2.jpg?auto=format&fit=max&w=560" />
          <img className="basic" src="https://assets.bigcartel.com/product_images/226053583/Merch_SQ-1.jpg?auto=format&fit=max&w=560" />
          <img className="legendary" src="https://assets.bigcartel.com/product_images/226053556/Mask_boy.jpg?auto=format&fit=max&w=560" />
          <img className="rare" src="https://assets.bigcartel.com/product_images/226053814/FYF_girl.jpg?auto=format&fit=max&w=560" />
          <img className="rare" src="https://assets.bigcartel.com/product_images/226054222/Merch_SQ-29.jpg?auto=format&fit=max&w=560" />
          <img className="epic" src="https://assets.bigcartel.com/product_images/227538098/Merch_SQ-12.jpg?auto=format&fit=max&w=560" />
          <img className="legendary" src="https://assets.bigcartel.com/product_images/216722125/seanpaul.jpg?auto=format&fit=max&w=560" />
          <img className="rare" src="https://assets.bigcartel.com/product_images/226054147/Merch_SQ-7.jpg?auto=format&fit=max&w=560" />
        

        </div>

      </div>
    )
  }

};

export default Store;
