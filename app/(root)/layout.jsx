import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <h1 className='text-3xl' >Navbar</h1> 
      {children}
    </div>
  )
}

export default layout
