import React from 'react'

const Navbar = () => {
    return (
      <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Jhon</span>
          <button>logout</button>
        </div>
      </div>
    );
}

export default Navbar