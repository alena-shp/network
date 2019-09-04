import React from 'react'

let Users = props => {
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <div>
            <img src={u.photoUser} alt=""/>
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
