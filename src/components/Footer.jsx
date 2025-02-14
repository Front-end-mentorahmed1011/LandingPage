import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className='w-full p-4 bg-black min-h-[40vh]' >
            <div className='flex flex-col md:flex-row w-[80%] h-[100%] p-5 m-auto md:items-center gap-20'>
                <div className="md:w-[30%] gap-4 flex-col flex text-semibold self-start translate-y-3">
                    <h2 className='text-white text-3xl'>Digital Agency</h2>
                    <p className='text-gray-300 text-sm'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit ipsum dolor sit amet consectetur. adipisicing
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 md:w-[70%] md:h-[100%]'>
                    <ul className='text-white md:h-[100%] p-4'>
                        <h4 className='mb-[20px] text-2xl font-bold'>Company</h4>

                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>About</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Features</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Works</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Career</li>
                    </ul>

                    <ul className='text-white md:h-[100%] p-4'>
                        <h4 className='mb-[20px] text-2xl font-bold'>Help</h4>

                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Customer Support</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Delivery Details</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Terms & Conditions</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Privacy Policy</li>
                    </ul>
                    <ul className='text-white md:h-[100%] p-4'>
                        <h4 className='mb-[20px] text-2xl font-bold'>Resources</h4>

                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Free Ebooks</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>How To Blog</li>
                        <li className='text-sm text-gray-300 hover:text-purple-600 hover:translate-x-4 transition-all w-fit my-3'>Subscribe TCJ</li>
                    </ul>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer;