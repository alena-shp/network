import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src='http://solovjev.ru/blog/wp-content/uploads/2017/12/eth-300x300.png'/> 
    </header>
  )
}

export default Header