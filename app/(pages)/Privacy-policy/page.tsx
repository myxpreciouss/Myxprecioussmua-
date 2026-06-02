import React from 'react'
import Nav from "@/app/components/nav"
import PrivacyPolicy from "./privacy"

const page = () => {
  return (
    <div>
      < Nav />
      <div className='mt-7'>
        <PrivacyPolicy/>
      </div>
    </div>
  )
}

export default page