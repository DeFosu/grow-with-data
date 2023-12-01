import React from 'react'
import Double from '../assets/double.webp'
import Single from '../assets/single.webp'
import Triple from '../assets/triple.webp'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='cursor-pointer w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img src={Single} alt="Single" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
          <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Sent up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md w-[200px] font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
        </div>
        <div className='cursor-pointer md:bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img src={Double} alt="Double" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
          <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
          <p className='text-center text-4xl font-bold'>$199</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8'>3 Users Allowed</p>
            <p className='py-2 border-b mx-8'>Sent up to 10 GB</p>
          </div>
          <button className='bg-[#00df9a] md:bg-black text-black md:text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
        </div>
        <div className='cursor-pointer w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img src={Triple} alt="Triple" className='w-20 mx-auto mt-[-3rem] bg-transparent' />
          <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
          <p className='text-center text-4xl font-bold'>$299</p>
          <div className='text-center font-medium mt-8'>
            <p className='py-2 border-b mx-8'>5 TB Storage</p>
            <p className='py-2 border-b mx-8'>10 Users Allowed</p>
            <p className='py-2 border-b mx-8'>Sent up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] text-black rounded-md w-[200px] font-medium my-6 mx-auto px-6 py-3 '>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards