import {useState} from 'react'
import Cardtask from '../components/Cardtask'
import { NoTasks } from '../components/NoTasks'
function Homepage({task,handleDelete,handleCheck}) {

  const [search, setSearch] = useState("")


    
    const handleSearch = (e) => {
      const valueSearch = e.target.value
      setSearch(valueSearch)
    }
    const filteredTasks = task.filter(({title,completed}) => title.toLowerCase().includes(search.toLowerCase()) && completed === false)
  return (
    <div className='container'>
      <div className='wrapper-search'>
        <label htmlFor='search'>Buscar Tarea</label>
          <input name='search' id='search' type='buscar' className='search' placeholder='buscar una tarea...' value={search} onChange={handleSearch}/>
      </div>
      <section className='container-tasks '>
        {filteredTasks.length === 0 && <NoTasks text={"No has creado ninguna tarea"}/>}
        {filteredTasks.map(({_id,title,description,completed}) => <Cardtask key={_id} title={title} description={description} id={_id} completed={completed} onDelete={handleDelete} onCheck={handleCheck}/>)}
      </section>
    </div>
  )
}

export default Homepage