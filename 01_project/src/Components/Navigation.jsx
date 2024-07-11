import React from 'react'

const Navigation = () => {
  return (
    <div><nav className='container'>
    <div className='Logo'>
      <img src="/Images/brand_logo.png" alt="Logo" />
    </div>
    <ul>
      <li href="#">MENU</li>
      <li href="#">LOCATION</li>
      <li href="#">ABOUT</li>
      <li href="#">CONTACT</li>
    </ul>
    <button>Login</button>
  </nav></div>
  )
}

export default Navigation