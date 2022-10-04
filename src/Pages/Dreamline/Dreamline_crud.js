import React,{useState,useEffect} from 'react';





function Dreamlinecrud() {
    const dateTodayy = new Date();
    // const items = JSON.parse(localStorage.getItem('Dreamlines')) ? JSON.parse(localStorage.getItem('Dreamlines')) : [];
    const [Dreamlines, setDreamlines] = useState([]);
    const [timeframeObject,setTimeframeObject] = useState({number: 0,range:''})
    const [mydate, setmydate] = useState(new Date());
    console.log('date == ',mydate)


    useEffect(() => {
        const Dreamlinez = JSON.parse(localStorage.getItem('Dreamlines')) ;
  
        if (Dreamlinez) {
         setDreamlines(Dreamlinez);
        }

        console.log("Dreamlines : ",Dreamlines)
      }, []);


    const [Dreamline, setDreamline] = useState(
        {
            id : 0,
            date: mydate,
            timeframe: '',
            ActionType: '',
            LifeCategorytYPE: '',
            desription: '',
            why: '',
            costType: '',
            estimatedcost: '',
            actualcost: '',
            actualtimeframe: '',
            Steps: [],
            Progress: '',
            status: ''
        }
    );


    const handleUpdate = (e) => {
        const nameT = e.target.name;
        Dreamline[nameT] = e.target.value;
        setDreamline({...Dreamline})
        console.log("added "+e.target.name+" to dreamline :",Dreamline)
        console.log(nameT)
        console.log("Dreamlines.length :",Dreamlines.length);
        console.log("Dreamlines. :",Dreamlines)
     }

    const handleUpdateArrays = (e) => {
        const nameT = e.target.name;
        Dreamline[nameT] = [...Dreamline[nameT],e.target.value];
        setDreamline({...Dreamline})
        console.log("added "+e.target.name+" to dreamline :",Dreamline)
        console.log(nameT)
    }

    const handleTimeframeUpdate = (e) => {
        const nameT = e.target.name
        const valueT = e.target.valueT

        if (nameT == 'number') {
            timeframeObject[nameT] = e.target.value
            setTimeframeObject({...timeframeObject})
            console.log("number ==",e.target.value)
        }
        else{
            timeframeObject[nameT] = e.target.value
            setTimeframeObject({...timeframeObject})
            console.log(` ${nameT} =`,e.target.value)
        }

        Dreamline['timeframe'] = timeframeObject.number+timeframeObject.range;
        setDreamline({...Dreamline})
    }


    const addDreamline = () => {
        // Add id
        Dreamline['id'] = Dreamlines.length+1;
        setDreamline({...Dreamline})
        // add dreamline
        setDreamlines([...Dreamlines,Dreamline]);
        console.log("New dreamlines",Dreamlines);
        // save to local storage
        saveDreamlines();
    }

    const saveDreamlines = () => {
        // SAVE TO LOCAL STORAGE
        
        const saveResponce = add2LocalStorage("Dreamlines",Dreamlines);
        if (saveResponce) {
            console.log("Dreamlines Saved to local storage")
        }
        else{
            console.log("Dreamlines NOT Saved to local storage")
        }

    }


    const add2LocalStorage = (what,arrray) =>{
        try {
            localStorage.setItem(what, JSON.stringify(arrray));

            return 1;
        } catch (error) {
            return 0;
        }     
    }

    const clearDreamlines = (what) =>{
        try {
            localStorage.setItem(what, []);
            console.log('cleared to local storage')
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
                <td><label>Startdate</label><input type='date' name="date" onChange={(e)=>handleUpdate(e)} /></td>
                <td>
                    <label>timeframe Timeframe</label>
                    <input type='number' placeholder='type...' name="number" onChange={(e)=>handleTimeframeUpdate(e)}/>
                    <select name="range" onChange={(e)=>handleTimeframeUpdate(e)}>
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                    </select>
                </td>
                <td>
                    <label>ActionType</label>
                    <select name="ActionType" onChange={(e)=>handleUpdate(e)}>
                        <option>DOING</option>
                        <option>HAVING</option>
                        <option>BEING</option>
                    </select>
                </td>
                <td>
                    <label>Category</label>
                    <select name="LifeCategorytYPE" onChange={(e)=>handleUpdate(e)}>
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

                <td><label>description</label><input type='text' placeholder='type...' name="desription" onChange={(e)=>handleUpdate(e)}/></td>
                <td><label>why</label><input type='text' name="why" placeholder='type...' onChange={(e)=>handleUpdate(e)}/></td>
                <td><label>Cost Type</label><input type='text' name="costType" placeholder='type...' onChange={(e)=>handleUpdate(e)}/></td>
                <td><label>Estimated cost</label><input type='text' name="estimatedcost" placeholder='type...' onChange={(e)=>handleUpdate(e)}/></td>
                <td><label>Actual cost</label><input type='text' name="actualcost" placeholder='type...' onChange={(e)=>handleUpdate(e)}/></td>
                <td><label>Actual timeframe</label><input type='text' name="actualtimeframe" placeholder='type...' onChange={(e)=>handleUpdate(e)}/></td>
                <td>
                    <label>Steps</label>
                    <select name="Steps" onChange={(e)=>handleUpdateArrays(e)}>
                        <option>Start (add date)</option>
                        <option>Update (add date)</option>
                        <option>Complete (add date)</option>
                    </select>
                </td>
                <td>
                    <label>Status</label>
                    <select name="status" onChange={(e)=>handleUpdate(e)}>
                        <option>Proposed</option>
                        <option>Completed</option>
                        <option>OverDue</option>
                    </select>
                </td>
                <td><label>Progress %</label><input type='text' name="Progress" placeholder='10%' onChange={(e)=>handleUpdate(e)}/></td>
                <td><button onClick={addDreamline}>Add</button></td>
                <td><button onClick={()=>{clearDreamlines("Dreamlines")}}>Delete</button></td>
            </tr>
        </tbody>

        </div>
    </div>
  )
}

export default Dreamlinecrud



