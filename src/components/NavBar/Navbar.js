//styles
import './Navbar.css'

//hooks
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className='navbar'>
          <NavLink to="/">
            <label className="logo">Стро<span>IT</span></label>
          </NavLink>
        </div>

        <ul>
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Services</a></li>
          <li className="link"><a href="#">Contact</a></li>
          <li><NavLink to="/add" className="add">Add</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}