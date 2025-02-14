import React, { useContext, useEffect, useState } from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Pagination ,EffectFlip} from 'swiper/modules';
import "swiper/css"
import "swiper/css/bundle"
import Slider1 from "../assets/slider1.png"
import Slider2 from "../assets/slider2.png"
import Slider3 from "../assets/slider3.png"
import { motion } from 'framer-motion';
import { ThemeConverter } from '../contextAPIs/ThemeToggler';

const Brands = () => {

        const {isLight} = useContext(ThemeConverter)
    
    const [slides , setSlides] = useState([])
    const brands = [
        {
            img : Slider1,
            header : "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
            author: "David Calathan - Director of Design Operations, New York"
        },
        {
            img : Slider2,
            header : "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
            author: "David Calathan - Director of Design Operations, New York"
        },
        {
            img : Slider3,
            header : "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
            author: "David Calathan - Director of Design Operations, New York"
        }
    ]

    useEffect(() => {
        setSlides(brands)
    },[])
  return (

    <React.Fragment>

        <section className={`w-full h-fit md:h-[60vh] py-[20px] ${isLight ? '' : 'bg-black text-white'}`}>

            <motion.article 
            initial={{translateY : "100px" , opacity: 0}}
            whileInView={{translateY : "0" , opacity: 1}}
            transition={{duration : 1 , delay: 0.2}}
            viewport={{once: true}}
            className='w-[80%] h-[100%] p-4 m-auto'>
                <h2 className='text-center text-3xl font-semibold'>Our Work</h2>
                <br />
                <Swiper className='h-[80%] active:cursor-grabbing'
                modules={[Pagination , EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect='flip'
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}>
                
                {slides.map((item , index) => (
                    <SwiperSlide 
                    key={index}
                    className={`bg-gray-50 p-4 pb-7 md:pb-0 ${isLight ? '' : 'bg-slate-800 text-white'}`}>
                    <div className='flex flex-col md:flex-row w-[100%] h-[100%] gap-5'>
                        <img src={item.img} className='md:h-[95%]'/>
                        <div className='flex flex-col gap-4'>
                            <p className={`text-l  capitalize ${isLight ? 'md:text-gray-800 text-black' : 'md:text-slate-100 text-white'}`}>{item.header}</p>
                            <h3 className='text-xl font-bold capitalize text-purple-800'>{item.author}</h3>
                        </div>
                    </div>
                </SwiperSlide>
                ))}

                </Swiper>
            </motion.article>
            
        </section>
        

    </React.Fragment>

  )
}

export default Brands



{/* <SwiperSlide className='bg-slate-50 p-4'>
                    <div className='flex w-[100%] h-[100%] gap-5'>
                        <img src={Slider1} className='' />
                        <div className='flex flex-col gap-4'>
                            <p className='text-l text-gray-800 capitalize'>The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.</p>
                            <h3 className='text-xl font-bold capitalize text-purple-800'>David Calathan - Director of Design Operations, New York</h3>
                        </div>
                    </div>
                </SwiperSlide> */}