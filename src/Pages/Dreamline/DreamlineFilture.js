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
    // [
    //     {
    //         id : 0,
    //         date: "22/05/2022",
    //         timeframe: "7 days",
    //         ActionType: "Having",
    //         LifeCategorytYPE: "Business",
    //         desription: "Test",
    //         why: "Master React",
    //         Cost_Type: "Time",
    //         estimatedcost: "1 Month",
    //         actualcost: "3 months",
    //        actualtimeframe: "ddddd",
    //         Steps: ['Start'],
    //         Progress: "10%",
    //     }
    // ]
    


    // const items = JSON.parse(localStorage.getItem('Dreamlines')) ? JSON.parse(localStorage.getItem('Dreamlines')) : [];
    const [Dreamlines, setDreamlines] = useState([]);
    // const [Dreamlines, setDreamlines] = useState([]);

    // for (const Dreamline of Dreamlines) {
    //     console.log("dream :",Dreamline)
    // }

    console.log("dream :",Dreamlines[0])
    
    // Create a stateValue to hold a dreamline
    const [Dreamline, setDreamline] = useState([{
        id : 0,
        date: "",
        timeframe: "",
        ActionType: "",
        LifeCategorytYPE: "",
        desription: "",
        why: "",
        Cost_Type: "",
        estimatedcost: "",
        actualcost: "",
       actualtimeframe: "",
        NoofSteps: "",
        Progress: "",
    }]);

    const [id, setid] = useState('');
    const [date, setdate] = useState('');
    const [ timeframe, settimeframe] = useState('');
    const [ActionType, setActionType] = useState('');
    const [LifeCategorytYP, setLifeCategorytYP] = useState('');
    const [desription, setdesription] = useState('');
    const [why, setwhy] = useState('');
    const [Cost_Type, setCost_Type] = useState('');
    const [estimatedcost, setestimatedcost] = useState('');
    const [actualtimeframe, setactualtimeframe] = useState('');
    const [NoofSteps, setNoofSteps] = useState('');
    const [Progress, setProgress] = useState('');



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
                    <th>#Cost_Type</th>
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
                        <td>{dream.timeframe}</td>
                        <td>{dream.ActionType}</td>
                        <td>{dream.LifeCategorytYPE}</td>
                        <td>{dream.desription}</td>
                        <td>{dream.why}</td>
                        <td>{dream.Cost_Type}</td>
                        <td>{dream.estimatedcost}</td>
                        <td>{dream.actualcost}</td>
                        <td>{dream.actualtimeframe}</td>
                        {/* <td>{dream.Steps.length}</td> */}
                        <td>{dream.Progress}</td>
                        <td><button>View</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default DreamlineFilture