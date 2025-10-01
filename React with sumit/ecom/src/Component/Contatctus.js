import { useState } from "react"

function Contatctus () {

  const [tasks,setTasks] = useState([
    {name:"Task1",status:"done"},
    {name:"Task2",status:"not done"},
    {name:"Task3",status:"done"}
  ]);

  const toggleStatus = (index) =>{
    const updatedTasks = tasks.map((task,i) => {
      if (i===index){
        return {
          ...task,
          status:task.status === "done" ? "not done" : "done"
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return(
    <div>
      <h2>Employee Task List</h2>
      <ul>
        {tasks.map((task,index) =>  (
          <li key={index}>
            <strong>{task.name}</strong> - <em>{task.status}</em>
            <button onClick={() => toggleStatus(index)} style={{marginLeft:'10px'}}>
              Toggle status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Contatctus