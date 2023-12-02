import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-24 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>Sankalp</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            {/* for about */}

            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>

            {/* for projects */}
            <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar