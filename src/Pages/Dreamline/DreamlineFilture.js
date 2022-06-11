import React,{useState,useEffect} from 'react'




const dreamz = [{
    "id": "01",
    "date": "11/06/2022",
    "timeframe": "01",
    "ActionType": "Having",
    "LifeCategorytYPE": "Finances",
    "desription": "100 000 in my savings account",
    "why": "to test my life manager",
    "estimatedcost": "20.00",
    "actualcost": "20.00",
    "actualtimeframe": "16 DAYS",
    "NoofSteps": "6",
    "Progress": "25%"
},
{
    "id": "02",
    "date": "19/06/2022",
    "timeframe": "01",
    "ActionType": "01",
    "LifeCategorytYPE": "01",
    "desription": "01",
    "why": "01",
    "estimatedcost": "01",
    "actualcost": "01",
    "actualtimeframe": "01",
    "NoofSteps": "4",
    "Progress": "80%"
},
]
function DreamlineFilture() {
    // Create a stateValue to hold starter dreamlines
    const [Dreamlines, setDreamlines] = useState(JSON.parse(localStorage.getItem('dreamlines')) ? JSON.parse(localStorage.getItem('dreamlines')): []);

    // Onload
    useEffect(() => {
        const dreamlines = JSON.parse(localStorage.getItem('dreamlines'));
        if (dreamlines) {
            setDreamlines(dreamlines);
        }
        }, [])

    
    // Create a stateValue to hold a dreamline
    const [Dreamline, setDreamline] = useState([{
        id : 0,
        date: "",
        timeframe: "",
        ActionType: "",
        LifeCategorytYPE: "",
        desription: "",
        why: "",
        estimatedcost: "",
        actualcost: "",
       actualtimeframe: "",
        NoofSteps: "",
        Progress: "",
    }]);

    // const getlocalstoragedreamlines =  useEffect(() => {
    //     const dreamlines = JSON.parse(localStorage.getItem('dreamlines'));
    //     if (dreamlines) {
    //      setDreamlines(dreamlines);
    //     }
    //   }, [])



  return (
    <div className='dreamline_filurable viewB'>
        <div className="filture_head">
            <h1>Dreamline filture</h1>
            <select className="filturingTypes">
                <option className='Having'>All</option>
                <option className='Having'>having</option>
                <option className='Being'>Being</option>
                <option className='Doing'>Doing</option>
            </select>
        </div>

        <table>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>#Startdate</th>
                    <th>#timeframe</th>
                    <th>#ActionType</th>
                    <th>#LifeCategorytYPE</th>
                    <th>#desription</th>
                    <th>#why</th>
                    <th>#estimated cost</th>
                    <th>#actual cost</th>
                    <th>#actual timeframe</th>
                    <th>#No of Steps</th>
                    <th>#Progress %</th>
                    <th>#View</th>
                    <th>#Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    Dreamlines.map((dream)=>
                    <tr>
                        <td>{dream.id}</td>
                        <td>{dream.date}</td>
                        <td>{dream.duedate}</td>
                        <td>{dream.ActionType}</td>
                        <td>{dream.LifeCategorytYPE}</td>
                        <td>{dream.desription}</td>
                        <td>{dream.why}</td>
                        <td>{dream.estimatedcost}</td>
                        <td>{dream.actualcost}</td>
                        <td>{dream.actualtimeframe}</td>
                        <td>{dream.Steps}</td>
                        <td>{dream.Progress}</td>
                        <td><button>View</button></td>
                        <td><button>Delete</button></td>
                    </tr>
        // id: getDreamId,
        // date: new Date().toDateString(),
        // duedate: dueDate[0].no + dueDate[0].timeframe ,
        // ActionType: "",
        // LifeCategorytYPE: "",
        // desription: "",
        // why: "",
        // estimatedcost: 0.00,
        // actualcost: 0.00,
        // actualtimeframe: "16 DAYS",
        // Steps: "6",
        // Progress: "25%"
                    
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default DreamlineFilture