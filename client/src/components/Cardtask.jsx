import "../styles/components/Cardtask.css"
import { MdDeleteForever,MdEdit,MdCheck } from "react-icons/md";

import  {useNavigate}  from "react-router-dom"

function Cardtask({title, description,id, onDelete,onCheck,completed}) {
  const navigate = useNavigate()
  const editTask = (id) => {
    navigate(`/task/edit/${id}`)
  }
  return (
    <article className={`card ${completed ? "completed" : ""}`}>
      <h3 className='card-title' title={title}>{title}</h3>
      <p className='card-description' title={description}>{description}</p>
      <div className='card-buttons'>
        <button className='card-button' onClick={() => editTask(id)}><MdEdit className='icon --edit' size={25}/></button>
        <button className='card-button '><MdDeleteForever className='icon --delete' onClick={() => onDelete(id)} size={25}/></button>
        <button className={`card-button ${completed ? "--checked" : ""}`}><MdCheck className='icon --check' onClick={() => onCheck(id,completed)} size={30}/></button>
      </div>
    </article>
  )
}

export default Cardtask