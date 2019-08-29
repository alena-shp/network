import React from 'react';
import s from './NameContacts.module.css';
import {NavLink} from 'react-router-dom';

const NameContacts = (props) => {
  const path='/Dialogs/' + props.id
    return (
      <div className={s.contact}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
    )
}

export default NameContacts