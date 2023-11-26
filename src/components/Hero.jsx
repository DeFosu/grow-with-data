import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className=' text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center gap-x-1 md:gap-x-3'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
          <TypeAnimation 
            sequence={['BTB',1000, 'BTC',1000, 'SASS', 1000]}
            speed={240}
            deletionSpeed={250}
            repeat={Infinity}
            className='md:text-5xl sm:text-4xl text-xl font-bold'
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero