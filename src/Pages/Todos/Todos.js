import React,{useState} from 'react'



function Todos() {
    // const todoz = [{id: 1,category: "Todoz",date:"name1", description: "Create a todo list"}];
    const [todoz, setTodoz] = useState([]);
    const [Todo, setTodo] = useState([
        {
            id: 1,
            category: "Todoz",
            date:"name1", 
            description: "Create a todo list"}
    ])
    // {id: 1,category: "Todoz",date:"name1", description: "Create a todo list"}
    const today = new Date();


    const [myid, setMyId] = useState(0);
    const [mycategory, setMyCategory] = useState("");
    const todasdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    const [mydate, setMyDate] = useState(todasdate);
    const [mydescription, setMyDescription] = useState("");
    const [mystatus, setMystatus] = useState("");

   



    const log2console = (event)=> {

    }

    const addcategory = (event)=>{
        setMyCategory(event.target.value);
        // console.log("Category Added ",mycategory);
    }

    const adddescription = (event)=>{
        setMyDescription(event.target.value);
        // console.log("Description Added ",mydescription);
    }

    const addMystatus = (event)=>{
        setMystatus(event.target.value);
        console.log(event.target.value);
    }

    const addid = ()=>{
        if (todoz.length === 0) {
            setMyId(0);
        }
        else{
            setMyId(todoz.length);
            // console.log("Id Added ",todoz.length);
        }

    }


    const addTodoz = () =>{
        addid()
        
        todoz.push({id:myid, category: mycategory,date: mydate, description: mydescription, mystatus: mystatus });
        // console.log(" Added todo : ",{id:myid, category: mycategory,date: mydate, description: mydescription })
    }

    const saveTodoz = () => {
        addTodoz();
    }

    



  return (
    <div className='todo_crud_component'>
        <div className='todo_head'>
            <h3 className='todo_label'>View Todos</h3>
            <div className='inputs_holder'>
                {/* id */}
                <select name="category" onChange={addcategory} >
                    <option value="Ideas">Computer Science</option>
                    <option value="Todos">Todos</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                    <option value="Incomes">Incomes</option>
                    <option value="Expenses">Expenses</option>
                    <option value="Plans">Plans</option>
                </select>
                <input disabled={true }type="text" placeholder={today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}/>
                <input type="text" placeholder="description" onKeyUp={adddescription}/>
                <select name="status" onChange={addMystatus} >
                    <option value="InComplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
                <button onClick={saveTodoz}>Add Todo</button>    
            </div>
        </div>
        <table className='mytable'>
            <thead>
                <tr>
                    <td>#Id</td>
                    <td>#Category</td>
                    <td>#Date</td>
                    <td>#Description</td>
                    <td>#Status</td>
                    <td>#Edit</td>
                    <td>#Delete</td>
                </tr>
            </thead>
            <tbody>


               {todoz.map((todo)=>(
                //    {id: 1,category: "Todoz",date:"name1", description: "Create a todo list"}
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.category}</td>
                    <td>{todo.date}</td>
                    <td>{todo.description}</td>
                    <td>{todo.mystatus}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
               ))
               }
            </tbody>
        </table>
    </div>
  )
}

export default Todos