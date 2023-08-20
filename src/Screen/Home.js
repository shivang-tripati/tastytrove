import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Cards from '../Component/Cards'
import Carousal from '../Component/Carousal'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div><Carousal/></div>
      <div className='m-3' >
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>        </div>
      <Footer/>
    </div>
  )
}
