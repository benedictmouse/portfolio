import React from 'react'
import { delay, motion } from "framer-motion"


const Container =(delay)=> ({
  hidden:{x : -100,opacity : 0},
  visible :{
     x:0,
     opacity: 1,
     transition: {duration:0.5 , delay: delay}
  },
})

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
       <motion.div 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}>
        <h2 className='text-center my-20 text-4xl'>Experience</h2>
        </motion.div>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <motion.div 
               whileInView={{opacity: 1, x:0}}
               initial={{opacity:0,x: -100}}
               transition={{duration: 0.5}}>
                <p className='mb-2 text-sm text-neutral-400'>2024- 3 months</p>
                </motion.div>  
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
            <motion.div 
               whileInView={{opacity: 1, x:0}}
               initial={{opacity:0,x: 100}}
               transition={{duration: 0.5}}>
                <h5 className='mb-2 font-semibold'> Attachee Tech Africa</h5>
                <p className='mb-4 text-neutral-400'>I gained valuable experience as an attachee at Tech Africa Company, where I extensively worked with React. This opportunity allowed me to deepen my understanding of React, enhance my coding skills, and contribute to several projects, further solidifying my passion for front-end development.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience