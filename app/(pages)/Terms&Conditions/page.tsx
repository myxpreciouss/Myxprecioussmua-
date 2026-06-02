import React from 'react'
import Nav from "@/app/components/nav"
import TC from "./T&C"

const page = () => {
  return (
    <div>
      < Nav />
      <div className='mt-7'>
        <TC/>
      </div>
    </div>
  )
}

export default page