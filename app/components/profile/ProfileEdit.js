// @flow
import React, { Component } from 'react'
import styles from './Profile.css'
import Profile from 'models/Profile'
import Input from 'material-ui/Input'
import Text from 'material-ui/Text'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'



class ProfileEdit extends Component {

  props : {
    profile: Profile,
    onTest: () => void,
    onAvatarChange: (Buffer) => () => void,
    onLogoutClick: () => void
  }


  render() {
    const profile = this.props.profile
    return (
      <div>
        <Button onClick={this.props.onLogoutClick }>Logout</Button>

        <Text>Profile</Text>
        <Avatar
          src={profile.avatarData}
          className={styles.avatar}
        />

        <Button onClick={this.props.onTest}>TEST</Button>
      </div>
    );
  }
}

export default ProfileEdit;