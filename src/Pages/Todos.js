import React,{useState} from 'react'

function push2arra(myold_arr,mynew_arr){

    const new_array = myold_arr.push(mynew_arr);
    return new_array;
}

function Todos() {
    // const todoz = [{id: 1,category: "Todoz",date:"name1", description: "Create a todo list"}];
    const [todoz, setTodoz] = useState([{id: 1,category: "Todoz",date:"name1", description: "Create a todo list"}]);
    const [newtodoz, setnewtodoz] = useState("");
    const rows = '';
    const today = new Date();

    const addtodo = ()=> {
        todoz.push({id: todoz.length++,category: newtodoz.category, date:newtodoz.date, description: newtodoz.description});
        console.log(todoz);
    }


    

  return (
    <div>
        <div className='todo_head'>
            <h3>View Todos</h3>
            <div>
                
                <input type="text" placeholder="category" onChange={(event)=>(setnewtodoz([{category: event.target.value}]))}/>
                <input disabled="true" type="text" placeholder={today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()} onChange={(event)=>(setnewtodoz([{date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}]))}/>
                <input type="text" placeholder="description" onChange={(event)=>(setnewtodoz([{description: event.target.value}]))}/>
                <button onClick={addtodo}>Add Todo</button>
                {/* onClick={setTodoz( todoz =>[...todoz,newtodoz])} */}
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <td>#Id</td>
                    <td>#Category</td>
                    <td>#Date</td>
                    <td>#Description</td>
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