import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center bg-slate-900  text-white px-8 py-4'>
        <div className="">Logo</div>
        <ul className='flex text-xl ml-auto gap-10'>
            <li><a href="#" className='no-underline hover:text-blue-400 transition-colors duration-300'>Home</a></li>
            <li><a href="#" className='no-underline hover:text-blue-400 transition-colors duration-300'>Favorite</a></li>
            <li><a href="#" className='no-underline hover:text-blue-400 transition-colors duration-300'>About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
