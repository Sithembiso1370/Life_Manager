
import React,{useEffect,useState} from 'react'


const evHandler = (e) =>{
    // console.log(e.target.name+" = ",e.target.value);
    // save_dreamline
    switch (e.target.name) {
        case 'save_dreamline':
        //   return <Start handleClick={handleClick} />
        console.log(e.target.name)
        
        case 'duedate_number':
            // console.log("e.target.parent = ",e.target.parent)
            // console.log("timeframe = ",document.getElementsByName("duedate_Timeframe").value)
        //   return <Playing handleClick={handleClick} />
        console.log(e.target.name,e.target.value);
        case 'description':
        //   return <Won handleClick={handleClick} />
        console.log(e.target.name)
        case 'lost':
        //   return <Lost handleClick={handleClick} />
        console.log(e.target.name)
    }
}

const getDreamId = () =>{
    const drmz = JSON.parse(localStorage.getItem('dreamlines')) ? JSON.parse(localStorage.getItem('dreamlines')): [];
     return (drmz.length+1);
}



function Dreamlinecrud() {

    // Create a stateValue to hold starter dreamlines
    const [Dreamlines, setDreamlines] = useState(JSON.parse(localStorage.getItem('dreamlines')) ? JSON.parse(localStorage.getItem('dreamlines')): []);
    const dueDate = [{no: 0,timeframe:""}]
    const [actionType, setactionType] = useState("")

    // Create a stateValue to hold starter dreamlines
    const [newDreamline,setnewDreamline] = useState({
        id: getDreamId,
        date: new Date().toDateString(),
        duedate: dueDate[0].no + dueDate[0].timeframe ,
        ActionType: actionType,
        LifeCategorytYPE: "COMP-SCI",
        desription: "TESTING",
        why: "BECAUSE WE NEED TO TEST ",
        estimatedcost: 20.00,
        actualcost: 100.00,
        actualtimeframe: "16 DAYS",
        Steps: "6",
        Progress: "25%"
    });

    const saveDreamlines = () =>{
        // Add dream to dreamline array
        // setDreamlines([...Dreamlines,newDreamline])
        try {
            // save the entire array to local
            localStorage.setItem('dreamlines', JSON.stringify([...Dreamlines,newDreamline]));
            console.log("added to local storage",JSON.parse(localStorage.getItem('dreamlines')))
        } catch (error) {
            console.log("Not added to local storage",error)
        }
    }


    // Onload
    // useEffect(() => {
    //     const dreamlines = JSON.parse(localStorage.getItem('dreamlines'));
    //     if (dreamlines) {
    //      setDreamlines(dreamlines);
    //     }
    //   }, [])

    // const setlocalstoragedreamlines = useEffect(() => {
    //     localStorage.setItem('dreamlines', JSON.stringify(Dreamlines));
    //   }, [Dreamlines]);



  return (
    <div className='dreamline_crud' loaded>
        <h3>Add dreamLine</h3>
        <div className='crud_inputs'>
            <input name="date" type="text" value={new Date().toLocaleDateString()} disabled />
            <div name="duedate" className='estimated_timeframe_Comp' style={{background_color: "red"}}>
                <input type='number' name="duedate_number" placeholder='number' placeholder="Estimated Timeframe" onChange={(e)=>dueDate[0].no = e.target.value}/>
                <select name='duedate_Timeframe' onChange={(e)=>dueDate[0].timeframe = e.target.value}>
                    <option>Day/(s)</option>
                    <option>Week/(s)</option>
                    <option>Month/(s)</option>
                    <option>Year/(s)</option>
                </select>
            </div>
            
            
            {/* Having being, Doing , Seing */}
            <select name='ActionType' className='action_category' onChange={(e)=>setactionType(e.target.value)}>
                    <option>Having</option>
                    <option>Being</option>
                    <option>Doing</option>
                    <option>Seing</option>
                    <option>Completed</option>
            </select>



            {/* Categories */}
            <select name='LifeCategorytYPE' id='main_categories' className='main_categories' onChange={evHandler}>
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
                    <option>Add Custom Category</option>
                    <option>Assets</option>
            </select>

            <input type="text" name="desription" placeholder="desription" onChange={evHandler}/>
            <input type="text" name='why' placeholder="why?" onChange={evHandler}/>
            <input type="number" name="estimatedcost" placeholder="estimated cost" onChange={evHandler}/>
            <input type="number" name='actual_cost' placeholder="actual cost" onChange={evHandler}/>


            {/* Timeframe Component */}
            <div name="actualtimeframe" className='estimated_timeframe_Comp' style={{background_color: "red"}}>
            <input type="text" name='actualtimeframe_number' placeholder='n days(calculated value)' disabled="true" onChange={evHandler} onChange={evHandler}/>
                <select name='actualtimeframe_timeframe' onChange={evHandler}>
                    <option>Day/(s)</option>
                    <option>Week/(s)</option>
                    <option>Month/(s)</option>
                    <option>Year/(s)</option>
                </select>
            </div>
            

            <select name="Steps" onChange={evHandler} >
                <option name="add_step">1.Start</option>
                <option name="add_step2">Add Step</option>
                {/* Add Todos here with timeframes within the selected estimated completion dates/ A plan of a sort */}
                {/* Steps have duration and cost attached to them  */}
            </select>
            <button name='save_dreamline' onClick={saveDreamlines}>Save</button>
        </div>
    </div>
  )
}

export default Dreamlinecrud