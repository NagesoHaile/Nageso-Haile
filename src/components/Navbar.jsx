import React, {useState} from 'react'

import {FaBars, FaTimes} from 'react-icons/fa';

import Logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-4 text-gray-300 z-10'>
        <div className="logo">
            <img src={Logo} alt='Logo'/>
        </div>
         { /*  Menu */}
        <div className="menu">
            <ul className='hidden md:flex'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
        </div>
        {/* Humburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
             {!nav ? <FaBars />: <FaTimes/>}
        </div>
        {/* mobile menu */}
        
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center'}>
                <li className='py-6 text-2xl'><a>Home</a></li>
                <li className='py-6 text-2xl'><a>About me</a></li>
                <li className='py-6 text-2xl'><a>Skills</a></li>
                <li className='py-6 text-2xl'><a>Contact</a></li>
            </ul>
        
    </div>
  )
}

export default Navbar
