import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2 my-4'>
        <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h2>
        <p>Sing up to our newsletter and stay up to date.</p>
      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input type="email" placeholder='Enter Email' className='p-3 rounded-md flex w-full text-black'/>
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-4 my-6 px-6 py-3'>Notify Me</button>
        </div>
        <p className=''>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter