import React, { useState } from 'react'


export default function Todo() {
    const [newtask, setnewtask] = useState(" ")
    const [tasks, settasks] = useState([])

    const addtask = () => {
        settasks([...tasks, newtask])
    }

    const deletetask=(index)=>{
 
        let duplicatearray=[...tasks]
        duplicatearray.splice(index,1)
        settasks(duplicatearray)
    }

    const taskslist = tasks.map((object, index)=> {
        return(
        <div className="row justify-content-center">

            <h1 className="col-md-6 text-left m-1">{index+1}.{object}</h1>
            <button className="btn btn-danger col-md-1 m-1" onClick={()=>deletetask(index)}>Delete</button>
        </div>
        )
    })
    return (
        <>
              <h1 className="text-center">REACT TO DO-LIST</h1>
            <div className="row todo-list justify-content-center">
          
                <input type="text" className="col-md-6 m-1" placeholder="Add Task" value={newtask} onChange={(e) => setnewtask(e.target.value)} />
                <button className="btn btn-primary col-md-1 m-1"  palceholder="Add Task" onClick={addtask}>Add Task</button>
            </div>

            {taskslist}
        </>
    )
}
