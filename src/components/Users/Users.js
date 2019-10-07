import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/img/foto.png'

class Users extends React.Component {
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
 onPageChanged = (pageNumber => {
   this.props.setCurrentPage(pageNumber)
   axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}'
      )
      .then(response => {
        this.props.setUsers(response.data.items)
      })
 })
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div>
          {pages.map(p => (
            <span
              className={this.props.currentPage === p && s.selectPage}
              onClick={() => {
                this.onPageChanged(p)
              }}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users &&
          this.props.users.map(u => (
            <div key={u.id}>
              <div>
                <img
                  src={
                    u.photos && u.photos.small !== null
                      ? u.photos.small
                      : userPhoto
                  }
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <span>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </span>
            </div>
          ))}
      </div>
    )
  }
}

export default Users
