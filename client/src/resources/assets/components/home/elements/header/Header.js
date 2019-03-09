import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import UserAccount from './UserAccount';
import Notification  from './Notification';
import MaterialIcon, { settings} from 'material-icons-react'
import Settings from './Settings';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="header__container w-960">
          <div className="logo"><Link to="/"><img src="./images/heart-logo.svg" alt="Couple Lock" /><span>LoveLock</span></Link></div>
          <SearchBox />
          <UserAccount />
          <Notification />
          <Settings />
        </div>
      </div>
    );
  }
}

export default Header;