import React from 'react'
import Nav from "@/app/components/nav"
import Collab from "./collab"

const page = () => {
  return (
    <div>
        < Nav />
        <div className='mt-7'>
        <Collab />
        </div>
       
    </div>
  )
}

export default page