
import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (

    <header>
        <NavLink to = "/" end>
            inicio  
        </NavLink>
        <NavLink to = "/quiz" end>
            Quiz
        </NavLink>
    </header>
    
    )
}

export default Header