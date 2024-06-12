import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaCss3, FaHtml5,FaJs } from 'react-icons/fa';
import { delay, motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate :{ y: [10, -10],
  transition :{
    duration: duration,
    ease: "linear" ,
    repeat: Infinity,
    repeatType:"reverse",

  },
  },

});

function Tech() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <motion.div 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      </motion.div>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}>
      <div className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-6xl text-cyan-700' />
         
        </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3 className='text-6xl text-blue-700' />
        </div>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-6xl text-orange-700' />
        </div>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJs className='text-6xl text-yellow-700' />
        </div>
        </motion.div>
    
      </div>
      </motion.div>
    </div>
  );
}

export default Tech;