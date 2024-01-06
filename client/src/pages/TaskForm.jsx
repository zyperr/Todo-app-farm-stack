import { useState,useEffect } from "react"
import "../styles/pages/TaskForm.css"
import {useParams,useNavigate} from "react-router-dom"
import { SnackBar } from "../components/snackbar"
import {createOneTask, getOneTask, updateOneTask} from "../api/apiCalls"
function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const params = useParams()
  const [snack, setSnack] = useState("")
  const [snackText, setSnackText] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params.id) {

      const res =await updateOneTask(params.id,title,description)
      
      if (res === 200) {
        setSnack("show success")
        setSnackText("Tarea editada")
      }else{
        setSnack("show error")
        setSnackText("Error al editar")
      }
    }else{

      const res = await createOneTask(title,description)
      console.log(res)
      if (res.ok || res.status === 201) {
        setSnack("show success")
        setSnackText("Tarea guardada")
      }else if(res.ok !== true || res.status === 409){
        console.log("ya existe")
        setSnack("show exist")
        setSnackText("Tarea ya existe")
        setTimeout(() => {
          setSnack("")
          setSnackText("")
        },1500)
        return

      }
      else{
        setSnack("show error")
        setSnackText("Error al guardar")
      }
    }
    setTimeout(() => {
      setSnack("")
      setSnackText("")
      navigate("/")
    }, 1500);
    e.target.reset()
  }
  useEffect(() => {
    if (params.id) {
      fetchTask()
    }
    async function fetchTask(){
      const data = await getOneTask(params.id)
      setTitle(data.title)
      setDescription(data.description)
    }
  },[])


  return (
    <div className='wrapper'>
      <form className='form' onSubmit={handleSubmit}>
          <label className='form-label' htmlFor='title'>Tarea</label>
          <input className='form-input' type='text' id='title' placeholder='Titulo de la tarea' autoFocus={true} onChange={(e) => setTitle(e.target.value)}
          value={title}/>
          <label className='form-label' htmlFor='description'>Descripción</label>
          <textarea className='form-input'  id="description"placeholder='Descripción de la tarea' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
          <button className='form-button' >
            {params.id ? "Editar Tarea" : "Crear Tarea"}
          </button>
      </form>
      <SnackBar text={snackText} type={snack}/>
    </div>
  )
}

export default TaskForm