import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Profile' activeClassName={s.activeL}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' activeClassName={s.activeL}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News' activeClassName={s.activeL}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' activeClassName={s.activeL}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Settings' activeClassName={s.activeL}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Users' activeClassName={s.activeL}>Users</NavLink>
      </div>
    </nav>
  )
}

export default Navbar