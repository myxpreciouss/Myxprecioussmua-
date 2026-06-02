import React from 'react'
import Portfolio from "./portfolio"
import Nav from "@/app/components/nav"
import Footer from "@/app/components/footer"

const page = () => {
  return (
    <div>
     <div className='mb-16'>
     < Nav />
     </div>
     < Portfolio />
     < Footer />
    </div>
  )
}

export default page
