import React,{useState,useEffect} from 'react';





function Dreamlinecrud() {
    const dateTodayy = new Date();
    const [Dreamlines, setDreamlines] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('Dreamlines'));
        if (items) {
            setDreamlines(Dreamlines);
        }
    }, [Dreamlines]);

    const [date, setdate] = useState(new Date);
    const [timeframeNumber, settimeframeNumber] = useState(0);
    const [timeframetimeframe, settimeframetimeframe] = useState('');
    const [timeframe, settimeframe] = useState(timeframeNumber + timeframetimeframe);
    const [ActionType, setActionType] = useState('');
    const [LifeCategorytYPE, setLifeCategorytYPE] = useState('');
    const [desription, setdesription] = useState('');
    const [why, setwhy] = useState('');
    const [costType, setcostType] = useState('');
    const [estimatedcost, setestimatedcost] = useState('');
    const [actualcost, setactualcost] = useState('');
    const [actualtimeframe, setactualtimeframe] = useState('');
    const [Steps, setSteps] = useState([]);
    const [Progress, setProgress] = useState('');
    const [status, setstatus] = useState('');
    

    const [Dreamline, setDreamline] = useState({});


    const add2LocalStorage = (what,arrray) =>{
        try {
            localStorage.setItem(what, JSON.stringify(arrray));
            return 1;
        } catch (error) {
            return 0;
        }     
    }

    const addDreamline = (e) =>{
        // SET THE DREAMLINE VALUES FOR EACH KEY
        try {
            setDreamlines([...Dreamlines,Dreamline]);
            add2LocalStorage("Dreamlines",Dreamlines);
        } catch (error) {
            console.log(error)
        }
        // LOG THE DREAMLINE
        logDreamLines();
    }

    const logDreamLines = () =>{
        console.log(Dreamlines)
    }

    const setCurrentDreamline = () => {
        try {
            setDreamline({
                id : 0,
                date: date,
                timeframetimeframe: timeframe,
                ActionType: ActionType,
                LifeCategorytYPE: LifeCategorytYPE,
                desription: desription,
                why: why,
                costType: costType,
                estimatedcost: estimatedcost,
                actualcost: actualcost,
               actualtimeframe: actualtimeframe,
                Steps: Steps,
                Progress: Progress,
                status: status
            });

            return 1;
        } catch (error) {
            return 0;
        }

    }



  return (
    <div className='dreamline_crud' >
        <h3>Add dreamLine</h3>
        <div className='crud_inputs'>

        <tbody className="mytbody">
            <tr>
                <td><label>Startdate</label><input type='date' onChange={(e)=>{setdate(e.target.value)}} /></td>
                <td>
                    <label>timeframe Timeframe</label>
                    <input type='number' placeholder='type...' onChange={(e)=>{settimeframeNumber(e.target.value)}}/>
                    <select onChange={(e)=>{settimeframetimeframe(e.target.value)}}>
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                    </select>
                </td>
                <td>
                    <label>ActionType</label>
                    <select onChange={(e)=>{setActionType(e.target.value)}}>
                        <option>DOING</option>
                        <option>HAVING</option>
                        <option>BEING</option>
                    </select>
                </td>
                <td>
                    <label>Category</label>
                    <select onChange={(e)=>{setLifeCategorytYPE(e.target.value)}}>
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
                </td>

                <td><label>description</label><input type='text' placeholder='type...' onChange={(e)=>{setdesription(e.target.value)}}/></td>
                <td><label>why</label><input type='text' placeholder='type...' onChange={(e)=>{setwhy(e.target.value)}}/></td>
                <td><label>Cost Type</label><input type='text' placeholder='type...' onChange={(e)=>{setcostType(e.target.value)}}/></td>
                <td><label>Estimated cost</label><input type='text' placeholder='type...' onChange={(e)=>{setestimatedcost(e.target.value)}}/></td>
                <td><label>Actual cost</label><input type='text' placeholder='type...' onChange={(e)=>{setactualcost(e.target.value)}}/></td>
                <td><label>Actual timeframe</label><input type='text' placeholder='type...' onChange={(e)=>{setactualtimeframe(e.target.value)}}/></td>
                <td>
                    <label>Steps</label>
                    <select onChange={(e)=>{setSteps(e.target.value)}}>
                        <option>Start</option>
                        <option>...</option>
                        <option>Complete</option>
                    </select>
                </td>
                <td>
                    <label>Status</label>
                    <select onChange={(e)=>{setstatus(e.target.value)}}>
                        <option>Proposed</option>
                        <option>Completed</option>
                        <option>OverDue</option>
                    </select>
                </td>
                <td><label>Progress %</label><input type='text' placeholder='10%' onChange={(e)=>{setSteps(e.target.value)}}/></td>
                <td><button onClick={()=>{addDreamline()}}>Add</button></td>
                <td><button>Delete</button></td>
            </tr>
        </tbody>

        </div>
    </div>
  )
}

export default Dreamlinecrud


