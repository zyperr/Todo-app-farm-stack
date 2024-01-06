import React from 'react'
import "../styles/components/NoTasks.css"
export function NoTasks({text}) {
  return (
    <article className='no-tasks'>
        <p className='no-tasks-text'>
            {text}
        </p>
    </article>
  )
}
