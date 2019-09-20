import React from 'react'
import * as axios from 'axios'
import userPhoto from './../../assets/img/foto.png'

class Users extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props)
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div>
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
              <div>{u.fullName}</div>
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
