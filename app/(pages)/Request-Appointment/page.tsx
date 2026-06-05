import React from 'react'
import Form from "./form"
import Nav from "@/app/components/nav"
import Footer from "@/app/components/footer"

const page = () => {
  return (
    <div>
     <div className='mb-16'>
     < Nav />
     </div>
     < Form />
     < Footer />
    </div>
  )
}

export default page
