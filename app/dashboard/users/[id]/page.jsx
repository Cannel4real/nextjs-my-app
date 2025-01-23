import React from 'react'

const page = ({params}) => {
    const { id } = params;
  return (
    <h1 className='text-3xl'>user profile: {id}</h1>
  )
}

export default page
