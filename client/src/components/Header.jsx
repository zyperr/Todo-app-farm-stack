import { NavLink } from 'react-router-dom'
import "../styles/components/Header.css"
import { routesList } from '../routes/routesList';
function Header() {
  return (
    <header className='header'>
        <h1 className='header-logo'>TodoApp</h1>
        <nav className='header-nav'>
            <ul className='header-nav-list'>
                {
                  routesList.map(({path,name,icon}) => (
                    <li className='header-nav-item-list' key={path}><NavLink to={path}>{icon}</NavLink></li>
                  ))
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header