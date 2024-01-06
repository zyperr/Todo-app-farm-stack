import Cardtask  from '../components/Cardtask'
import { NoTasks } from '../components/NoTasks'


export function CompletedTasks({onCheck,onDelete,task}) {
  
  const completedTasks = task.filter(({completed}) => completed === true)
  return (
    <section className='container'>
      <h2 className='container-title'>Tareas completadas</h2>
      <p>Has completado: {completedTasks.length} tareas</p>
      <article className='container-tasks'>
        {completedTasks.length === 0 && <NoTasks text="Upss parece que aun no has completado ninguna tarea"/>}
        {
          completedTasks.map(({_id,title,description,completed}) => (
            <Cardtask key={_id} title={title} description={description} id={_id} completed={completed} onCheck={onCheck} onDelete={onDelete}/>
          ))
        }
      </article>
    </section>
  )
}
