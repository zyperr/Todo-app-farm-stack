import React from 'react'
import { NavLink } from 'react-router-dom'
export function Error404() {
  return (
    <section className='error-container wrapper'>

      <h2 className='error-title'>
            <span className='error-accent'>4</span>0<span className='error-accent'>4</span>
        </h2>
        <div className='container'>
          <p>Página no encontrada</p>
          <p>La página que buscas no existe</p>
          <ul className='wrapper'>
            <li>
                <NavLink className="error-link" to='/'>Ir a inicio</NavLink>
            </li>
          </ul>
        </div>
    </section>
  )
}
