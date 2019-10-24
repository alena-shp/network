import React from 'react'
import { withRouter } from 'react-router-dom'
import * as axios from 'axios'
import { connect } from 'react-redux'
import Profile from './Profile'
import {setUserProfile} from './../../redux/profileReducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = state => {
  return {
    profile: state.postsState.profile
  }
}

let WithUrldataContainer = withRouter(ProfileContainer)

export default connect(
  mapStateToProps,
  { setUserProfile }
)(WithUrldataContainer)
