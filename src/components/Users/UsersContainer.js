import React from 'react'
import * as axios from 'axios'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from '../../redux/usersReducer'
import Users from './Users'
import { connect } from 'react-redux'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}'
      )
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}'
      )
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
