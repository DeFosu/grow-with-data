import React from 'react'
import { FaDribbbleSquare, FaFacebook, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-x-16 gap-y-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolores temporibus perferendis cumque. Excepturi consequuntur deserunt omnis! Ad odio nihil hic, dolor quo fugit nobis illum, modi excepturi, ratione et!</p>
        <div  className='flex gap-8 my-4'>
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} /> 
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='grid grid-cols-2 col-span-2 sm:grid-cols-4 gap-y-8'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul className='flex flex-col gap-2 text-sm py-2'>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul className='flex flex-col gap-2 text-sm py-2'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul className='flex flex-col gap-2 text-sm py-2'>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul className='flex flex-col gap-2 text-sm py-2'>
            <li>Claim</li>
            <li>Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer