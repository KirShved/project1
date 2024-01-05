import React from 'react'
import foto from '../img/pirojok.jpg'

function Basic() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'
    style={{height:window.innerHeight-54}}>
      <h1>Самые вкусные пирожки только у нас</h1>
      <img src={foto} alt='sdfsdfsdf'/>
    </div>
  )
}

export default Basic
