import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";





function DreamlineFilture() {
    const params = useParams();
    let params_id = params.my_id ;

        console.log("params_id",params_id);


    // const items = JSON.parse(localStorage.getItem('Dreamlines')) ? JSON.parse(localStorage.getItem('Dreamlines')) : [];
    const [Dreamlines, setDreamlines] = useState([]);



    useEffect(() => {
      const Dreamlinez = JSON.parse(localStorage.getItem('Dreamlines')) ;

      if (Dreamlinez) {
       setDreamlines(Dreamlinez);
      }
      console.log("Dreamlines : ",Dreamlines)
    }, []);


    console.log("[d,t,i].length = ",['d','t','i'].length)

    let toDisplay = '';

    if (!params_id) {
        toDisplay = Dreamlines.map((dream)=>
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
            <td>{dream.status}</td>
            <td><a href={'?my_id='+dream.id}>View</a></td>
            <td><button>Delete</button></td>
        </tr>
        );
    } else {
        toDisplay = '';
    }



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
                    toDisplay
                }
            </tbody>
        </table>

    </div>
  )
}

export default DreamlineFilture