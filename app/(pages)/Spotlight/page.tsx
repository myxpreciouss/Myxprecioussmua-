import React from 'react'
import Spotlight from "./spotlight"
import Nav from "@/app/components/nav"
import Footer from "@/app/components/footer"

const page = () => {
  return (
    <div>
     <div className='mb-16'>
     < Nav />
     </div>
     < Spotlight />
     < Footer />
    </div>
  )
}

export default page
