import React from 'react'
import Aboutimg from "../assets/bout.jpg"
import { delay, motion } from "framer-motion"

function About() {
  return <div className='border-b border-neutral-900 pb-4'>
    <h2 className='text-center my-20 text-4xl'>About   
    <span className='text-neutral-500'>
           me
        </span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
               <motion.div 
               whileInView={{opacity: 1, x:0}}
               initial={{opacity:0,x: -100}}
               transition={{duration: 0.5}}>
                <div className='items-center justify-center'>
                    <img className='rounded-2xl' src={Aboutimg} alt ="about me"/>
                </div>
                </motion.div> 
            </div>
            <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                    <motion.div 
               whileInView={{opacity: 1, x:0}}
               initial={{opacity:0,x: 100}}
               transition={{duration: 0.5}}>
                        <p className='my-2 max-w-xl py-6'>I am passionate about technology and continuously seek opportunities to enhance my knowledge and skills. My coursework and projects have provided me with a solid understanding of information technology principles and practices. I am particularly adept at HTML &CSS , Javascript , Reactjs and some basics in Java language and I enjoy tackling complex problems and finding efficient solutions.</p>
                        </motion.div>
                    </div>
                </div>
        </div>
  </div>
  
}

export default About