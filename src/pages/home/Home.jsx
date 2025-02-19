
import React from 'react'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'

const home = () => {
  const navigate = useNavigate()
  const handleclick = useCallback(()=>{
    navigate('/corazon',{state:{userData:{displayName:'jose'}}})
   })

  return (
    <div>
      <h1>home</h1>
      <button onClick={handleclick}> ir a </button>
    </div>
    
  )
}

export default home