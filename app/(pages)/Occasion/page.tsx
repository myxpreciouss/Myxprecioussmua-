'use client'
import React from 'react'
import Ocassion  from "./occasion"

import Nav from "@/app/components/nav"
import Footer from "@/app/components/footer"

const page = () => {
  return (
    <div>
      <div className=' mb-16'>
      <Nav />
      </div>
       <Ocassion />
      < Footer />
    </div>
  )
}

export default page