import React from 'react'
import { delay, motion } from "framer-motion"

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
         <motion.div 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}>
        <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
        </motion.div>
        <div className='text-center tracking-tighter'>
        <motion.div 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: 100}}
      transition={{duration: 2}}>
            <p className='my-4 '>0792051011</p>
            </motion.div>
            <motion.div 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: 100}}
      transition={{duration: 2.5}}>
            <a href='mailto:benedictomondi60@gmail.com' className='border-b'>benedictomondi60@gmail.com</a>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact