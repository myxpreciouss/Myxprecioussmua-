import React from 'react'
import Gallery from "@/app/components/gallery"
import Nav from "@/app/components/nav"
import Footer from "@/app/components/footer"

const page = () => {
  return (
    <div>
      <div className=' mb-16'>
      <Nav />
      </div>
       <Gallery />
      < Footer />
    </div>
  )
}

export default page