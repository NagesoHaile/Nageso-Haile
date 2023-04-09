import React, {useState} from 'react'

import {FaBars, FaTimes} from 'react-icons/fa';

import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

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
                <li>
                <Link  to="home"  smooth={true} offset={50} duration={500} >
                   Home
               </Link>
                </li>
                    <li>
                    <Link  to="about"  smooth={true} offset={50} duration={500} >
         About Me
        </Link>
                    </li>
                <li>
                <Link to="skill" smooth={true} offset={50} duration={500} >
            Skills
            </Link>
                </li>
                <li>
                <Link to="service" smooth={true} offset={50} duration={500} >
            Service
            </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500} >
          Contact 
            </Link>
                </li>
            </ul>
        </div>
        {/* Humburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
             {!nav ? <FaBars />: <FaTimes/>}
        </div>
        {/* mobile menu */}
        
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center'}>
                <li className='py-6 text-2xl'><a href="#home">Home</a></li>
                <li className='py-6 text-2xl'><a href="#about">About me</a></li>
                <li className='py-6 text-2xl'><a href="#skills">Skills</a></li>
                <li className='py-6 text-2xl' ><a href="#service">Services</a></li>
                <li className='py-6 text-2xl'><a href="#contact">Contact</a></li>
            </ul>
        
    </div>
  )
}

export default Navbar
