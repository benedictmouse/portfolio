import React from 'react';
import logo from "../assets/benLogo.png";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
   <nav className=" mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
        <img className='mx-2 w-12' src={logo} alt='logo'/>
    </div>
    <div className="flex flex-shrink-0 item-center">
    <a href="https://www.instagram.com/mouse2003" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='mx-2 text-2xl' />
          </a>
        <a href="https://www.linkedin.com/in/benedict-omondi-398b7a2a6?trk=contact-info" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className='mx-2 text-2xl' />
        </a>
        <a href="https://github.com/benedictmouse" target="_blank" rel="noopener noreferrer">
        <FaGithub className='mx-2 text-2xl' />
        </a>
    </div>
   </nav>
  )
}

export default Navbar;