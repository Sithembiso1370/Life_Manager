
import React,{useEffect,useState} from 'react'


const evHandler = (e) =>{
    // console.log(e.target.name+" = ",e.target.name);
    // save_dreamline
    switch (e.target.name) {
        case 'save_dreamline':
        //   return <Start handleClick={handleClick} />
        console.log(e.target.name)
        break;
        
        case 'duedate_number':
            // console.log("e.target.parent = ",e.target.parent)
            // console.log("timeframe = ",document.getElementsByName("duedate_Timeframe").value)
        //   return <Playing handleClick={handleClick} />
        console.log(e.target.name,e.target.value);
        break;
        case 'description':
        //   return <Won handleClick={handleClick} />
        console.log(e.target.name)
        break;
        case 'lost':
        //   return <Lost handleClick={handleClick} />
        break;
        default:
            console.log(e.target.name);
            break;

    }
}

const getDreamId = () =>{
    const drmz = JSON.parse(localStorage.getItem('dreamlines').length > 0) ? JSON.parse(localStorage.getItem('dreamlines')): [];
     return (drmz.length+1);
}



function Dreamlinecrud() {

    // Onload
    useEffect(() => {
        const dreamlines = JSON.parse(localStorage.getItem('dreamlines'));
        if (dreamlines) {
            setDreamlines(dreamlines);
        }
    }, [])
    

    // Create a stateValue to hold starter dreamlines
    // JSON.parse(localStorage.getItem('dreamlines')) ? JSON.parse(localStorage.getItem('dreamlines')): []
    const [Dreamlines, setDreamlines] = useState([]);
    const [id, setid] = useState(0);
    setid(getDreamId);
    const [todaysdate, settodaysdate] = useState('');
    const [dueDate, setdueDate] = useState([{no: 0,timeframe:''}]);
    const [actionType, setactionType] = useState('')
    const [LifeCategorytYPE, setLifeCategorytYPE] = useState('');
    const [desription, setdesription] = useState('');
    const [why, setwhy] = useState('');
    const [estimatedcost, setestimatedcost] = useState('');
    const [actualcost, setactualcost] = useState('');
    const [actualtimeframe, setactualtimeframe] = useState([{actualtimeframe_number: 0,actualtimeframe_timeframe:''}]);
    const [steps, setSteps] = useState([]);
    const [progress, setprogress] = useState('');


    // Create a stateValue to hold starter dreamlines
    const [newDreamline,setnewDreamline] = useState({
        id: 0,
        date:'',
        duedate: '' ,
        ActionType: '',
        LifeCategorytYPE: '',
        desription: '',
        why: '',
        estimatedcost:0,
        actualcost: 0,
        actualtimeframe: '',
        Steps:[],
        Progress: 0
    });

    const saveDreamlines = () =>{
        setnewDreamline({
            id: id,
            date:todaysdate,
            duedate: dueDate ,
            ActionType: actionType,
            LifeCategorytYPE: LifeCategorytYPE,
            desription: desription,
            why: why,
            estimatedcost:estimatedcost,
            actualcost: actualcost,
            actualtimeframe: actualtimeframe,
            Steps: steps,
            Progress: progress
        })
        // Add dream to dreamline array
        // setDreamlines([...Dreamlines,newDreamline])
        console.log('Adding :'+newDreamline+' to local Storage');

        try {
            // save the entire array to local
            localStorage.setItem('dreamlines', JSON.stringify([...Dreamlines,newDreamline]));
            console.log("added to local storage",JSON.parse(localStorage.getItem('dreamlines')))
        } catch (error) {
            console.log("Not added to local storage",error)
        }
    };

    const deleteDreamlines = () =>{
        // Clear the dreamlines variable        
        console.log('Dreamlines Refresh ');

        if(localStorage.getItem('dreamlines').length > 0){
            console.log(localStorage.getItem('dreamlines').length);
            console.log(localStorage.getItem('dreamlines'));
            try {
                // DElete the entire array to local
                localStorage.setItem('dreamlines', []);
                console.log("Cleared local storage");
            } catch (error) {
                console.log("Not Cleared Local storage ",error)
            }
        }
        else{
            console.log('Local Storage Already Empty');
            console.log(localStorage.getItem('dreamlines').length);
            console.log(localStorage.getItem('dreamlines'));
        }

    }

    const showDreamlines = ()=> {
        console.log(Dreamlines);
    }



    // const setlocalstoragedreamlines = useEffect(() => {
    //     localStorage.setItem('dreamlines', JSON.stringify(Dreamlines));
    //   }, [Dreamlines]);



  return (
    <div className='dreamline_crud' loaded>
        <h3>Add dreamLine</h3>
        <div className='crud_inputs'>
            <input name="date" type="text" onChange={(e)=>settodaysdate(e.target.value)} />
            <div name="duedate" className='estimated_timeframe_Comp' style={{background_color: "red"}}>
                <input type='number' name="duedate_number" placeholder='number' placeholder="Estimated Timeframe" onChange={(e)=>setdueDate({no: e.target.value})}/>
                <select name='duedate_Timeframe' onChange={(e)=>setdueDate({timeframe: e.target.value})}>
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
            <select name='LifeCategorytYPE' id='main_categories' className='main_categories' onChange={(e)=>setLifeCategorytYPE(e.target.value)}>
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

            <input type="text" name="desription" placeholder="desription" onChange={(e)=>setdesription(e.target.value)}/>
            <input type="text" name='why' placeholder="why?" onChange={(e)=>setwhy(e.target.value)}/>
            <input type="number" name="estimatedcost" placeholder="estimated cost" onChange={(e)=>setestimatedcost(e.target.value)}/>
            <input type="number" name='actual_cost' placeholder="actual cost" onChange={(e)=>setactualcost(e.target.value)}/>


            {/* Timeframe Component */}
            <div name="actualtimeframe" className='estimated_timeframe_Comp' style={{background_color: "red"}}>
                <input type="text" name='actualtimeframe_number' placeholder='n days(calculated value)' disabled="true" onChange={(e)=>setactualtimeframe({actualtimeframe_number: e.target.value})} />
                <select name='actualtimeframe_timeframe' onChange={(e)=>setactualtimeframe({actualtimeframe_timeframe: e.target.value})}>
                    <option>Day/(s)</option>
                    <option>Week/(s)</option>
                    <option>Month/(s)</option>
                    <option>Year/(s)</option>
                </select>
            </div>
            

            <select name="Steps" onChange={(e)=>setSteps(['started..'])} >
                <option name="add_step">1.Start</option>
                <option name="add_step2">Add Step</option>
                {/* Add Todos here with timeframes within the selected estimated completion dates/ A plan of a sort */}
                {/* Steps have duration and cost attached to them  */}
            </select>
            <input type="number" name="Progress..." placeholder='Progress...' onChange={(e)=>setprogress(e.target.value)}/>
            <button name='save_dreamline' onClick={saveDreamlines}>Save</button> 
            <button name='save_dreamline' onClick={deleteDreamlines}>DeleteAll</button> 
            <button name='save_dreamline' onClick={showDreamlines}>ShowAll</button>
        </div>
    </div>
  )
}

export default Dreamlinecrud