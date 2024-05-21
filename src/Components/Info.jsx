import React from 'react'
import { INFO_CONTENT } from '../constants'
import profilePic from '../assets/profilePic.jpeg'
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration:0.5,delay:delay}
    }
})
const Info = () => {
  return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                      <motion.h1 
                          variants={container(0)}
                          initial="hidden"
                          animate='visible'
                          className="pb-16 text-6xl font-thin tracking-tight lg:mt-20xl   lg:text-20xl ">Anant Gautam</motion.h1>
                      <motion.span
                          variants={container(0.5)}
                          initial="hidden"
                          animate='visible'
                          id="s1" className="bg-gradient-to-r from-pink-400 via-slate-600 to-purple-700 bg-clip-text text-3xl tracking-tight text-transparent"> Full Stack Developer
                      </motion.span>
                      <motion.p  variants={container(1)}
                          initial="hidden"
                          animate='visible' id='pc' className='my-2 max-w-xl py-6 font-light tracking-tighter'>{INFO_CONTENT}
                      </motion.p>
                  </div>
              </div>
              <div className='w-full lg:w-1/2 lg:p-7'>
                  <div className='flex justify-centre'>
                      <motion.img
                          initial={{ x:-100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{duration:1,delay:1.2}}
                          id='profilePic' src={profilePic} alt="Anant Gautam" />
                  </div>
              </div>  
          </div>
   </div>
  )
}

export default Info