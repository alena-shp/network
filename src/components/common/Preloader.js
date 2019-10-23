import React from 'react'
import preloader from './../../assets/img/preloader.gif'

const Preloader = props => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <img src={preloader} alt="" />
    </div>
  )
}

export default Preloader
