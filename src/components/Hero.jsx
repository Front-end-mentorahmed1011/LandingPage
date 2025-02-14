import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import heroImage from "../assets/HeroImage.png"
import { ThemeConverter } from '../contextAPIs/ThemeToggler'

const Hero = () => {

        const {isLight} = useContext(ThemeConverter)

  return (
    <React.Fragment>
        <section className={`w-100 min-h-[72vh] flex items-center ${isLight ? '' : 'bg-slate-950 text-white'} transition-colors`}>


            <div className='w-100 md:w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-4 h-[100%]'>
                
                {/* Hero Content */}
                <motion.div 
                initial={{scaleY : 0}}
                animate={{scaleY : 1}}
                transition={{duration: 0.5 , delay:0.5}}
                
                className='col-span-1 flex flex-col md:h-[100%] gap-5 md:my-auto order-2 md:order-1 overflow-hidden origin-bottom justify-center'>
                    <h2 className='md:w-[90%] font-[600] md:text-5xl capitalize text-3xl'>Building brands in the 
                         <span className='text-violet-800 mt-10'> Digital agency</span>
                    </h2>
                    <p className={`text-slate-800 font-normal md:w-[75%] text-md leading-normal ${isLight ? '' : ' text-slate-300'}`}>Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.</p>
                    <motion.button
                        initial={{scaleX : 0,
                            boxShadow: "0px 0px 5px 1px #8758cc11"
                        }}
                        animate={{scaleX : 1}}
                        whileHover={{boxShadow: "0px 0px 5px 1px #8758cc"}}
                        className='bg-violet-800 text-white px-4 py-2 rounded w-32'>Get Started
                    </motion.button>
                </motion.div>
                {/* Hero Image */}
                <motion.div 
                initial={{scale : 0}}
                animate={{scale : 1}}
                transition={{duration: 0.5 , delay:0.3}}
                className='col-span-1 order-1 md:order-2 flex justify-center'>
                    <div className='relative w-fit'>
                    <img src={heroImage}  className='object-fill'/>
                    <motion.div 
                    initial={
                                {
                                    translateX : "-100px",
                                    opacity: 0  
                                }
                            }
                    animate={
                                {
                                    translateX : "0px",
                                    opacity: 1
                                }
                            }
                    transition={{delay: 1 , duration: 0.3}}
                    className={`absolute bottom-[-20px] md:right-[-20px] right-[-10px] p-2 flex flex-col bg-white shadow-md rounded ${isLight ? '' : 'bg-slate-900 text-white border border-white'}`}>
                        <span className='font-bold'>⭐ Projects</span>
                        <span className='font-bold'>600+<span className='font-normal'>Done</span></span>
                    </motion.div>
                    </div>
                </motion.div>
            </div>

        </section>
    </React.Fragment>
  )
}

export default Hero