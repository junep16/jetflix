import React, { useState, useEffect } from 'react'
import "./Navigation.css";  

export default function Navigation() {
  const [show, setShow] = useState(false); 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY); 
      if(window.scrollY > 50) {
        setShow(true); 
      } else {
        setShow(false); 
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, []); 

  return (
    <nav className={`nav ${show && "nav-black"}`}>
      <img 
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
        className="nav-logo"
        onClick={() => window.location.reload()}

      />
      <img
        alt="User logged"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" 
        className="nav-avatar"
      />
    </nav>
  )
}
