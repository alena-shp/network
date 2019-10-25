import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="http://solovjev.ru/blog/wp-content/uploads/2017/12/eth-300x300.png"
        alt=""
      />
      <div className={s.login}>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  )
}

export default Header
