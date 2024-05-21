import React from 'react'
import logo from "../assets/logo.png";
import { FaDownload } from "react-icons/fa6";
import { motion } from 'framer-motion';


import Resume from"../Resume/Resume.pdf"
import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
      <nav className=" mb-20 flex items-center justify-between py-6">
          
          <div className=" flex flex-shrink-0 items-center">
              <img id="img" src={logo} alt="logo" ></img>    
      </div>
      
      <motion.div
       whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1}}
      
      >
        
        <a href={ Resume} download={Resume}>
          <button id="b1" className='mb-5 ml-5'>
            Download Resume
          <FaDownload className='mb-2 ml-20 bg-red-900  gap-5 flex items-center justify-center'/>
          </button>
        </a>
      </motion.div>
      <motion.div
         whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:1}}
        id='icon' className='m-8 flex items-center justify-center  gap-6 text-5xl '>
      
        <a href='https://www.linkedin.com/in/anant-gautam-b2811a1ba'><FaLinkedin /></a>   
        <a href="https://github.com/Anant2021"><FaGithub/></a>
          </motion.div>
    </nav>
  )
}

export default Navbar