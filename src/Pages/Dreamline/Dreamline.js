import React from 'react'
import './Dreamline.css'
import DreamlineFilture from './DreamlineFilture'
import DreamlineOverviews from './DreamlineOverviews'
import Dreamlinecrud from './Dreamline_crud'


const evHandler = (e) =>{
  console.log(e.target.value);
}


function Dreamline() {
  return (
    <div className='Dreamline_Worksheet'>
       <h1 className='dreamline_header_text'>Dreamline Worksheet</h1>
       {/* <DreamlineOverviews/>        */}
       <div className='dreamlineMain'>
          {/* Estimated Timeframe Component */}
          <Dreamlinecrud evHandler={evHandler}/>
          <DreamlineFilture  evHandler={evHandler}/>
       </div>



    </div>
  )
}

export default Dreamline