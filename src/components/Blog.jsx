import React, { useContext } from 'react'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import {motion} from "framer-motion"
import { ThemeConverter } from '../contextAPIs/ThemeToggler'


const Blog = () => {

        const {isLight } = useContext(ThemeConverter)
    
    
  return (
    <React.Fragment>
      <section className={`w-full min-h-[100vh]  py-[4rem] ${isLight ? 'bg-gray-100' : 'bg-slate-900 text-white'}`}>
            <div className='w-[85%] h-[100%] m-auto p-5'>
                <h2 className='border-l-[8px] border-l-violet-300 text-3xl pl-2  h-[50px] flex justify-start items-center font-semibold'>Our Blogs</h2>
                <br />
                <div className='w-[100%] grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <motion.div 
                    initial={{translateY: "200px" , opacity: 0}}
                    whileInView={{translateY: "0" , opacity: 1}}
                    viewport={{once : true}}
                    transition={{duration: 1 , delay: 0.2}}
                    className='relative md:mb-0 mb-[200px]'>
                        <img src={blog1} alt="" />
                        <div className={`absolute bottom-[-50px] md:right-[15px] right-0 w-[90%] h-fit p-3 ${isLight ? ' bg-white' : 'bg-slate-900 text-violet-600 border border-white'}` }>
                            <h3 className='font-semibold capitalize mb-3 text-2xl'>Realtime analytics</h3>
                            <p className={`font-normal capitalize  text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.“</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{translateY: "200px" , opacity: 0}}
                    whileInView={{translateY: "0" , opacity: 1}}
                    viewport={{once : true}}
                    transition={{duration: 1 , delay: 0.2}}
                    className='relative md:mb-0 mb-[200px]'>
                        <img src={blog2} alt="" />
                        <div className={`absolute bottom-[-50px] md:right-[15px] right-0 w-[90%] h-fit p-3 ${isLight ? ' bg-white' : 'bg-slate-900 text-violet-600 border border-white'}` }>
                            <h3 className='font-semibold capitalize mb-3 text-2xl'>Realtime analytics</h3>
                            <p className={`font-normal capitalize  text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.“</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{translateY: "200px" , opacity: 0}}
                    whileInView={{translateY: "0" , opacity: 1}}
                    viewport={{once : true}}
                    transition={{duration: 1 , delay: 0.2}}

                    className='relative md:mb-0 mb-[100px]'>
                        <img src={blog3} alt="" />
                        <div className={`absolute bottom-[-50px] md:right-[15px] right-0 w-[90%] h-fit p-3 ${isLight ? ' bg-white' : 'bg-slate-900 text-violet-600 border border-white'}` }>
                            <h3 className='font-semibold capitalize mb-3 text-2xl'>Realtime analytics</h3>
                            <p className={`font-normal capitalize  text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.“</p>
                        </div>
                    </motion.div>

                </div>
                <br />
                <div className='w-[100%] text-center mt-20'>
                    <motion.button
                        initial={{translateY : "200px",
                                  opacity: 0,
                                boxShadow: "0px 0px 5px 1px #8758cc11"
                        }}
                        whileInView={{translateY : "0", opacity: 1}}
                        viewport={{once : true}}
                        transition={{duration: 1 , delay : 0.2}}
                        whileHover={{boxShadow: "0px 0px 5px 1px #8758cc"}}
                        className='bg-violet-800 text-white px-4 py-2 rounded w-32 m-auto'>View All
                    </motion.button>
                </div>
                
            </div>
      </section>
    </React.Fragment>
    
  )
}

export default Blog