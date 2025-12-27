
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [projects,setProjects]=useState([]);
  const [title,setTitle]=useState("");

  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get("http://localhost:5000/api/projects",{headers:{authorization:token}})
      .then(res=>setProjects(res.data));
  },[]);

  const create = async () => {
    await axios.post("http://localhost:5000/api/projects",{title},{headers:{authorization:token}});
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">My Projects</h1>
      <input placeholder="New Project" onChange={e=>setTitle(e.target.value)} />
      <button onClick={create}>Add</button>

      {projects.map(p=>(
        <Link key={p._id} to={`/project/${p._id}`} className="block mt-2">
          {p.title}
        </Link>
      ))}
    </div>
  );
}
