import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './Dreamline.css'
import DreamlineFilture from './DreamlineFilture'
import Dreamlinecrud from './Dreamline_crud'





function Dreamline_Worksheet() {
  return (
    <div className='Dreamline_Worksheet'>
        <Header/>
       {/* <DreamlineOverviews/>        */}
       <div className='dreamlineMain'>
          {/* Estimated Timeframe Component */}
          <h1 className='dreamline_header_text'>Dreamline Worksheet</h1>
          <Dreamlinecrud />
          <DreamlineFilture  />
       </div>
       <Footer/>
    </div>
  )
}

export default Dreamline_Worksheet