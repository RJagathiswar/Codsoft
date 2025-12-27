
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
  const {id}=useParams();
  const [tasks,setTasks]=useState([]);
  const [title,setTitle]=useState("");
  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/tasks/${id}`,{headers:{authorization:token}})
      .then(res=>setTasks(res.data));
  },[]);

  const addTask = async () => {
    await axios.post("http://localhost:5000/api/tasks",
      {title,projectId:id},
      {headers:{authorization:token}});
    window.location.reload();
  };

  const completed = tasks.filter(t=>t.status==="Completed").length;
  const progress = tasks.length ? (completed/tasks.length)*100 : 0;

  return (
    <div className="p-6">
      <h2 className="font-bold">Tasks</h2>
      <div className="bg-gray-200 h-3 w-full rounded">
        <div className="bg-green-500 h-3 rounded" style={{width:`${progress}%`}}></div>
      </div>

      <input placeholder="Task title" onChange={e=>setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      {tasks.map(t=>(
        <div key={t._id}>{t.title} - {t.status}</div>
      ))}
    </div>
  );
}
