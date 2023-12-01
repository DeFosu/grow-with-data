
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const handleNav = () => {
      setNavbar(!navbar)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>REACT.</h1>
        <ul className='hidden md:flex cursor-pointer'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {navbar ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div onClick={handleNav} className={`fixed left-0 top-0 w-[60%] max-w-[600px] md:hidden h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${!navbar && 'left-[-100%]'}`}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <ul className='uppercase p-4 cursor-pointer'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar