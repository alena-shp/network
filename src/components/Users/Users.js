import React from 'react'
import * as axios from 'axios'

let Users = props => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      })
  }
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <div>
            <img src={u.photoUser} alt="" />
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id)
                }}
              >
                FOLLOW
              </button>
            )}
          </div>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
          <span>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
