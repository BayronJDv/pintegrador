
import { Outlet,useLocation } from 'react-router'
import React from 'react'

const Heart = () => {
  const location = useLocation()
  const userData = location.state.userData || "hola";
  return (
    <div>
    <div>Heart</div>
    <p>{userData.displayName}</p>
    <Outlet/>
    </div>

  )
}

export default Heart