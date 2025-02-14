import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion' 
import { ThemeConverter } from '../contextAPIs/ThemeToggler'

const Navbar = () => {

    const {isLight , handleTheme , theme} = useContext(ThemeConverter)

    const [showList , setShowList] = useState(false)
    const handleDarkTheme = () => {

        handleTheme()

    }

    useEffect(() => {
        
        handleDarkTheme
        console.log(isLight)

    } , [isLight])


    const HandleList = () => {
        setShowList(!showList)
    }

  return (
    <React.Fragment>
       <nav className={`w-100 min-h-[40px] ${isLight ? '' : 'bg-black text-white'} transition-colors`}>
            <div className=" w-[100%] md:w-[80%]  p-2 m-auto flex justify-between items-center ">
                <motion.a 
                initial={{translateY: -300}}
                animate={{translateY: 0}}
                href="#" className='flex p-1 items-center h-[100%]'>
                    <img src={logo} alt="" className='h-100 inline mr-[10px] scale-[0.9]'/>
                    <h1 className={`text-xl md:text-2xl text-gray-900 font-[500] ${isLight ? '' : 'text-white'}`}>Digital agency</h1>
                </motion.a>
                <div className='flex flex-row md:gap-8 items-center md:w-auto md:h-[100%]'>

                    <ul className={`flex flex-col md:flex-row  md:items-center md:h-[100%] fixed left-0 top-0 ${showList ? "w-[50%] border-r border-r-white" : "w-[0%]"} ${isLight ? 'bg-white' : 'bg-black text-white'} md:w-auto h-[100vh] md:static border-r-slate-700 shadow-lg transition-all md:border-none md:shadow-none z-50  md:bg-transparent pt-[20px] md:pt-[0px] overflow-hidden`} >
                        
                            <motion.li 
                            className='md:hidden'
                            key={showList ? "showed" : "hidden"}
                            initial={{translateX : "-1000px"}}
                            animate={{translateX : "0px", string: 1}}
                            transition={{delay: 0.2}}
                            >
                                <a href="#" className='flex p-1 pl-2 items-center h-[100%]'>
                                    <img src={logo} alt="" className='h-100 inline mr-[10px] scale-[0.9]'/>
                                    <h1 className='text-xl md:text-2xl font-[500]'>Digital agency</h1>
                                </a>
                            </motion.li>
                        <li>
                            <ul className='flex flex-col md:flex-row gap-5 pl-[10px] md:pl-[0px] mt-[40px] md:mt-[0px]'>
                                <motion.li 
                                initial={window.innerWidth < 768 ? {translateY : -1000} : {translateX : 1000}}
                                animate={window.innerWidth < 768 ? {translateY : 0} : {translateX : 0}}
                                key={showList ? "showed1" : "hidden1"}
                                className='text-md md:text-lg font-[500] cursor-pointer p-2 content-center md:border-b-2 md:border-b-transparent md:hover:border-b-violet-700 duration-300 md:hover:text-purple-800 hover:bg-violet-700 md:bg-transparent md:hover:bg-transparent rounded hover:text-white md:rounded-none'>About</motion.li>
                                 <motion.li 
                                 initial={window.innerWidth < 768 ? {translateY : -1000} : {translateX : 1000}}
                                animate={window.innerWidth < 768 ? {translateY : 0} : {translateX : 0}}
                                transition={{delay:0.1}}
                                key={showList ? "showed2" : "hidden2"}

                                 className='text-md md:text-lg font-[500] cursor-pointer p-2 content-center md:border-b-2 md:border-b-transparent md:hover:border-b-violet-700 duration-300 md:hover:text-purple-800 hover:bg-violet-700 md:bg-transparent md:hover:bg-transparent rounded hover:text-white md:rounded-none'>Services</motion.li>
                                <motion.li 
                                initial={window.innerWidth < 768 ? {translateY : -1000} : {translateX : 1000}}
                                animate={window.innerWidth < 768 ? {translateY : 0} : {translateX : 0}}
                                transition={{delay:0.2}}
                                key={showList ? "showed3" : "hidden3"}

                                className='text-md md:text-lg font-[500] cursor-pointer p-2 content-center md:border-b-2 md:border-b-transparent md:hover:border-b-violet-700 duration-300 md:hover:text-purple-800 hover:bg-violet-700 md:bg-transparent md:hover:bg-transparent rounded hover:text-white md:rounded-none'>Projects</motion.li>
                            </ul>
                        </li>
                        <motion.li 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                        key={showList ? "showed4" : "hidden4"}
                        className='mt-[500px] pl-[10px]  capitalize md:hidden'>
                            <ul>
                                <li className='font-bold'>Created by Ahmed wael</li>
                            </ul>
                        </motion.li>

                    </ul>
                    <div className='flex gap-7 justify-center items-center'>
                    <motion.button
                    initial={{scaleX : 0}}
                    animate={{scaleX : 1}}
                    transition={{delay: 0.3}}
                    className='bg-violet-800 text-white px-4 py-2 rounded origin-right'>Get in Touch</motion.button>
                    { isLight
                        ?
                        <motion.span 
                        key="moon"
                        initial={{opacity : 0}}
                        animate={{opacity : 1}}
                        transition={{duration: 1}}>
                            <FontAwesomeIcon icon={faMoon} onClick={handleDarkTheme} className='cursor-pointer scale-[1.8] rotate-[-20deg] '/> 
                        </motion.span>
                        :
                        <motion.span
                        key="sun"
                        initial={{opacity : 0}}
                        animate={{opacity : 1}}
                        transition={{duration: 1}}>
                            <FontAwesomeIcon icon={faSun} onClick={handleDarkTheme} className='cursor-pointer scale-[1.8] text-white'/>
                        </motion.span>
                    }
                    {   
                        !showList 
                        ?
                        <motion.span
                        key="hidden"
                         className='scale-[1.3] md:hidden'
                         initial={{opacity: 0}}
                         animate={{opacity: 1}}
                         transition={{duration: 1}}
                         onClick={HandleList}>
                            <FontAwesomeIcon icon={faBars} />
                        </motion.span>
                        :
                        <motion.span
                        key="showed"
                         className='scale-[1.3] md:hidden'
                         initial={{opacity: 0}}
                         animate={{opacity: 1}}
                         transition={{duration: 1}}
                         onClick={HandleList}>
                            <FontAwesomeIcon icon={faXmark} />
                        </motion.span>
                    }
                    
                    </div>
                    
                </div>
            </div>
       </nav>

    </React.Fragment>
  )
}

export default Navbar