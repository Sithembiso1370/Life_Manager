import React,{useState,useEffect} from 'react';





function Dreamlinecrud() {
    const dateTodayy = new Date();
    // const items = JSON.parse(localStorage.getItem('Dreamlines')) ? JSON.parse(localStorage.getItem('Dreamlines')) : [];
    const [Dreamlines, setDreamlines] = useState([]);
    const [Dreamline, setDreamline] = useState(
        {
            id : 0,
            date: '',
            timeframetimeframe: '',
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
    }


    const addDreamline = () => {
        console.log("adding dreamline",Dreamline)
    }


    const [mydate, setmydate] = useState(new Date());
    console.log(mydate)

    

    


    const add2LocalStorage = (what,arrray) =>{
        try {
            localStorage.setItem(what, JSON.stringify(arrray));
            console.log('added to local storage')
            return 1;
        } catch (error) {
            return 0;
        }     
    }



    // useEffect(() => { // this hook will get called everytime when myArr has changed
    //     // perform some action which will get fired everytime when myArr gets updated
    //         console.log("Old dreamlines = ",Dreamlines);
    //         setDreamlines([...Dreamlines,Dreamline]);

    //         add2LocalStorage("Dreamlines",[...Dreamlines,Dreamline]);
    //         console.log("New dreamline = ",Dreamline);
    //         console.log('Updated Dreamlines', Dreamlines)
    //     },Dreamline)

        useEffect(() => {
            console.log("Old dreamlines = ",Dreamlines);
            setDreamlines([...Dreamlines,Dreamline]);

            add2LocalStorage("Dreamlines",[...Dreamlines,Dreamline]);
            console.log("New dreamline = ",Dreamline);
            console.log('Updated Dreamlines', Dreamlines)
          },Dreamline);

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
                    <input type='number' placeholder='type...' onChange={(e)=>setDreamline({timeframetimeframe : e.target.value})}/>
                    <select onChange={(e)=>setDreamline({timeframetimeframe: Dreamline.timeframetimeframe + e.target.value})}>
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
                <td><label>why</label><input type='text' placeholder='type...' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td><label>Cost Type</label><input type='text' placeholder='type...' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td><label>Estimated cost</label><input type='text' placeholder='type...' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td><label>Actual cost</label><input type='text' placeholder='type...' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td><label>Actual timeframe</label><input type='text' placeholder='type...' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td>
                    <label>Steps</label>
                    <select onChange={(e)=>{setDreamline({date: e.target.value})}}>
                        <option>Start</option>
                        <option>...</option>
                        <option>Complete</option>
                    </select>
                </td>
                <td>
                    <label>Status</label>
                    <select onChange={(e)=>{setDreamline({date: e.target.value})}}>
                        <option>Proposed</option>
                        <option>Completed</option>
                        <option>OverDue</option>
                    </select>
                </td>
                <td><label>Progress %</label><input type='text' placeholder='10%' onChange={(e)=>{setDreamline({date: e.target.value})}}/></td>
                <td><button onClick={addDreamline}>Add</button></td>
                <td><button onClick={()=>{clearDreamlines("Dreamlines")}}>Delete</button></td>
            </tr>
        </tbody>

        </div>
    </div>
  )
}

export default Dreamlinecrud



