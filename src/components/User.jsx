import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams() ;

  return (
   
    <div className='p-10 bg-neutral-500 text-white text-2xl items-center justify-center'>User:{id}</div>
  )
}

export default User