import React from 'react'
import './Dreamline.css'
import DreamlineFilture from './DreamlineFilture'
import Dreamlinecrud from './Dreamline_crud'





function Dreamline() {
  return (
    <div className='Dreamline_Worksheet'>
       <h1 className='dreamline_header_text'>Dreamline Worksheet</h1>
       {/* <DreamlineOverviews/>        */}
       <div className='dreamlineMain'>
          {/* Estimated Timeframe Component */}
          <Dreamlinecrud />
          <DreamlineFilture  />
       </div>



    </div>
  )
}

export default Dreamline