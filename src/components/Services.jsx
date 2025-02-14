import React, { useContext }  from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPenNib, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { ThemeConverter } from '../contextAPIs/ThemeToggler'

const ServicesAnimations = {
  init: { opacity : 0 , translateY : "200px"},
  animate: { opacity : 1 , translateY : "0px"},
}
const delayTime = 0.2
const Services = () => {


  const {isLight} = useContext(ThemeConverter)
  return (
    <React.Fragment>
        <section className={`w-100 p-4 min-h-[40vh]  py-6 ${isLight ? 'bg-gray-100' : 'bg-black text-white'} transition-colors`}>
            <div className='w-[85%] h-[100%] m-auto flex flex-col items-center'>
                <motion.h3 
                variants={ServicesAnimations}
                initial="init"
                whileInView="animate"
                viewport={{once : true}}
                transition={{duration: 1 , delay: delayTime }}
                className='text-center text-3xl text-violet-700 font-semibold'>Explore Our Services</motion.h3>
                <br />
                <motion.p 
                 variants={ServicesAnimations}
                 initial="init"
                 whileInView="animate"
                 viewport={{once : true}}
                 transition={{duration: 0.5 , delay: delayTime + 0.3}}
                className='text-center text-xl'> We are self-service data analytics software that lets you create visually.</motion.p>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-10' >
                    <motion.div 
                    variants={ServicesAnimations}
                    initial="init"
                    whileInView="animate"
                    viewport={{once : true}}
                    transition={{duration: 0.5 , delay: delayTime + 0.4}}
                    className="col-span-1 flex flex-col gap-y-4 items-start p-1">
                    <FontAwesomeIcon icon={faCamera} className='text-violet-700 text-3xl'/>
                    <h3 className='font-bold'>App Development</h3>
                    <p className={`text-l  ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit sed sunt tempora, ducimus reiciendis molestiae optio iusto voluptates pariatur</p>
                    </motion.div>
                    <motion.div 
                    variants={ServicesAnimations}
                    initial="init"
                    whileInView="animate"
                    viewport={{once : true}}
                    transition={{duration: 0.5 , delay: delayTime + 0.6}}
                    className="col-span-1 flex flex-col gap-y-4 items-start p-1">
                    <FontAwesomeIcon icon={faPenNib} className='text-violet-700 text-3xl'/>
                    <h3 className='font-bold'>Web Designing</h3>
                    <p className={`text-l  ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit sed sunt tempora, ducimus reiciendis molestiae optio iusto voluptates pariatur</p>
                    </motion.div>
                    <motion.div
                    variants={ServicesAnimations}
                    initial="init"
                    whileInView="animate"
                    viewport={{once : true}}
                    transition={{duration: 0.5 , delay: delayTime + 0.8}}
                    className="col-span-1 flex flex-col gap-y-4 items-start p-1">
                    <FontAwesomeIcon icon={faSearchengin} className='text-violet-700 text-3xl' />
                    <h3 className='font-bold'>SEO Optimaiztion</h3>
                    <p className={`text-l  ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit sed sunt tempora, ducimus reiciendis molestiae optio iusto voluptates pariatur</p>
                    </motion.div>
                    <motion.div
                    variants={ServicesAnimations}
                    initial="init"
                    whileInView="animate"
                    viewport={{once : true}}
                    transition={{duration: 0.5 , delay: delayTime + 1}}
                    className="col-span-1 flex flex-col gap-y-4 items-start p-1">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart}  className='text-violet-700 text-3xl'/>
                    <h3 className='font-bold'>Business Analysis</h3>
                    <p className={`text-l  ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit sed sunt tempora, ducimus reiciendis molestiae optio iusto voluptates pariatur</p>
                    </motion.div>
                </div>
                <motion.button
                    initial={{scaleX : 0}}
                    animate={{scaleX : 1}}
                    transition={{delay: 0.3}}
                    className='bg-violet-800 text-white px-4 py-2 rounded origin-left mt-10'>Get in Touch
                </motion.button>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Services