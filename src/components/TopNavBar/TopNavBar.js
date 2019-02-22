import React, { Component } from 'react';
import {connect} from 'react-redux'
import {logout} from '../../redux/actions'
import './TopNavBar.scss'

class TopNavBar extends Component {

  state = {
    profileHidden: false,
  }

  handleClick = () => {
    this.setState ({profileHidden: !this.state.profileHidden})
  }

  handleAdmin = () => {
    this.props.page('/dashboard/admin')
  }

  handleProfile = () => {
    this.props.page('/dashboard/profile')
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <div className = 'first-three'>
          <div className="navbar-tab">
            <span className="text">
              <div className="add-member-span">
                <div className="dropdown-notifs">
                  <i className="material-icons">notifications_none</i>
                  <div className="dropdown-content">
                    Notifications
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="navbar-tab">
            <span className="text">
              <div className="dropdown-people">
                <i className="material-icons">people_outline</i>
                <div className="dropdown-content">
                  Team Members
                </div>
              </div>
            </span>
          </div>
          <div className="navbar-tab">
            <input placeholder="Search Everything ..." className="search-bar">
            </input>
            <a href = 'https://google.com'>
              <div className="search-icon">
                <i className="material-icons">search</i>
              </div>
            </a>
          </div>
        </div>
        <div className='last-two'>
          <div className="navbar-tab">
            <span className="text">
              <div className="add-member-span">
                <i className="material-icons">add_circle_outline</i>
                <p> Invite Team Members </p>
              </div>
            </span>
          </div>
          <div className="navbar-tab">
            <div onClick = {this.handleClick}  className="add-member-span">
              <i className="material-icons">face</i>
              <p className = 'user-profile-menu' > UserProfile</p>
              {this.state.profileHidden ?
                (
                  <div>
                    <ul className = 'user-profile-menu-list'>
                      <li onClick={this.handleProfile}>Profile</li>
                      <li onClick = {this.handleAdmin}>Admin </li>
                      <li>Recycle Bin </li>
                      <li onClick = {this.props.logout}>Logout</li>
                    </ul>
                  </div>
                ): (null)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,{logout})(TopNavBar);
