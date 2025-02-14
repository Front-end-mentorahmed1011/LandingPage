import React from 'react'
import first from "../assets/Click.png"
import second from "../assets/DropBox.png"
import third from "../assets/GitHub.png"
import fourth from "../assets/Intuit.png"
import fifth from "../assets/Segments.png"
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeConverter } from '../contextAPIs/ThemeToggler'
const Firms = () => {

    const {isLight} = useContext(ThemeConverter)

  return (
    <React.Fragment>
        <section className={`w-100 min-h-[20vh] ${isLight ? '' : 'bg-slate-900 text-white'} transition-colors py-[40px]`}>
            <div className="md:w-[75%] h-[100%] m-auto">
                <motion.h3 
                initial={{scaleY : 0}}
                animate={{scaleY : 1}}
                transition={{delay : 0.4}}
                className='capitalize text-center font-semibold text-l origin-bottom'>
                    Powering next-gen companies
                </motion.h3>
                <div className='flex flex-wrap justify-around mt-5 gap-x-6 gap-y-4 w-[95%] m-auto md:w-[90%]'>
                    <motion.img
                    initial={{translateX : "-3000px"}}
                    animate={{translateX : "0px"}}
                    transition={{ delay:0.3 ,duration: 1}}
                    src={first}  className='object-contain'/>
                    <motion.img
                    initial={{translateX : "-3100px"}}
                    animate={{translateX : "0px"}}
                    transition={{delay: 0.6 , duration: 1}}
                    src={second}  className='object-contain'/>
                    <motion.img
                    initial={{translateX : "-3200px"}}
                    animate={{translateX : "0px"}}
                    transition={{delay: 0.9 , duration: 1}}
                    src={third}  className='object-contain'/>
                    <motion.img
                    initial={{translateX : "-3300px"}}
                    animate={{translateX : "0px"}}
                    transition={{delay: 1.2 , duration: 1}}
                    src={fourth} className='object-contain' />
                    <motion.img
                    initial={{translateX : "-3400px"}}
                    animate={{translateX : "0px"}}
                    transition={{delay: 1.5 , duration: 1}}
                    src={fifth}  className='object-contain'/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Firms