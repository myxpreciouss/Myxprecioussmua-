import React from 'react'
import Nav from "@/app/components/nav"
import Contact from "./Contact"

const page = () => {
  return (
    <div>
      < Nav />
      <div className='mt-7'>
        <Contact/>
      </div>
    </div>
  )
}

export default page