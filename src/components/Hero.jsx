import React from 'react'
import profilepic from "../assets/photo1.jpg"
import { delay, motion } from "framer-motion"


const Container =(delay)=> ({
    hidden:{x : -100,opacity : 0},
    visible :{
       x:0,
       opacity: 1,
       transition: {duration:0.5 , delay: delay}
    },
})


function Hero() {
  return <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
               <motion.div  whileInView={{opacity: 1, y:0}} variants={Container(0)} initial="hidden" animate="visible"> <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Benedict Omondi</h1></motion.div>
               <motion.div variants={Container(0.5)} initial="hidden" animate="visible">  <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Frontend Developer
                </span></motion.div>
                <motion.div variants={Container(1)} initial="hidden" animate="visible">  < p className='my-2 max-w-xl py-6 font-lighting tracking-tighter'>Hello , I'm an Information Technology student at South Eastern Kenya University, I am seeking challenging internship and job opportunities, as well as potential partnerships, to apply and expand my technical skills. With a strong academic foundation in information technology and hands-on experience in various programming languages, I am eager to contribute to innovative projects and learn from experienced professionals in the industry.</p></motion.div>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
            <motion.div 
               whileInView={{opacity: 1, x:0}}
               initial={{opacity:0,x: 100}}
               transition={{duration: 0.5}}>  <img src={profilepic} alt= "profile_pic"/></motion.div>
            </div>
        </div>
    </div>
  </div>
}

export default Hero