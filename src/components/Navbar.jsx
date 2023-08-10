import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav id="barreNavigation">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/catalogue'>Catalogue</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/panier'>Panier</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar