import React from 'react'

function Dreamlinecrud() {
  return (
    <div className='dreamline_crud'>
        <h3>Add dreamLine</h3>
        <div className='crud_inputs'>
        <div className='estimated_timeframe_Comp' style={{background_color: "red"}}>
            <label>Estimated Timeframe</label>
            <input type='number' placeholder='number' />
            <select name='Timeframe'>
                <option>Day/(s)</option>
                <option>Week/(s)</option>
                <option>Month/(s)</option>
                <option>Year/(s)</option>
            </select>
        </div>
        
        {/* Having being, Doing , Seing */}
        <select name='action_category' className='action_category'>
                <option>Having</option>
                <option>Being</option>
                <option>Doing</option>
                <option>Seing</option>
        </select>



        {/* Categories */}
        <select name='main_categories' id='main_categories' className='main_categories'>
                <option>Health</option>
                <option>Education</option>
                <option>Finances</option>
                <option>Computer Science</option>
                <option>Entertainment</option>
                <option>Relationtionships</option>
                <option>Businness</option>
                <option>Physical health and Growth</option>
                <option>Pychological health and Growth</option>
                <option>Work</option>
                <option>Add Category</option>
        </select>

        <input type="text" placeholder="desription"/>
        <input type="text" name='reason' placeholder="why?"/>
        <input type="number" placeholder="estimated cost"/>
        <input type="number" name='actual_cost' placeholder="actual cost"/>


            {/* Timeframe Component */}
            <input type="text" placeholder='n days(calculated value)' disabled="true"/>

        <select name="steps">
            <option>Add Step</option>
            {/* Add Todos here with timeframes within the selected estimated completion dates/ A plan of a sort */}
            {/* Steps have duration and cost attached to them  */}
        </select>
        </div>
    </div>
  )
}

export default Dreamlinecrud