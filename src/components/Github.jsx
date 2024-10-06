import { data } from 'autoprefixer'
import React from 'react'
import { useEffect,useState } from 'react'

const Github = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/Crazyraturi")
         .then(Response =>Response.json())
         .then(data => {console.log(data);
          setdata(data)
    })
    }, [])
    
  return (
    <div className='flex items-center justify-center bg-orange-400 p-6 text-xl'>
        <img  className=" rounded-2xl border-neutral-900 border-2h-20 w-20"src={data.avatar_url} alt="profile photo" />
        Github followers:{data.followers} <br />
        public repo : {data.public_repos}</div>
  )
}

export default Github