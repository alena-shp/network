import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../assets/img/foto.png'

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => (
          <span
            className={props.currentPage === p && s.selectPage}
            onClick={() => {
              props.onPageChanged(p)
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users &&
        props.users.map(u => (
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

export default Users
