import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
  const [nav,setNav]=useState(false);
  const handleClick=()=>{
    setNav(!nav);
  }
  return (
    <>
    
    <div className='text-white   flex justify-between px-4 mx-auto'>
        

       <h1 className='text-3xl font-bold  text-green-600'>REACT.</h1>
        


        <ul className='md:flex hidden '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About </li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Company</li>
        </ul>
        
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <AiOutlineMenu/>:  <AiOutlineClose/> }
          </div>
        
        <ul className={!nav ? 'hidden' :  'bg-[#000300] uppercase md:hidden fixed w-[40%] pt-20 h-[100%]  border-r border-r-gray-800 '}>
            <li className='p-2 border-b border-gray-600'>Home</li>
            <li className='p-2 border-b border-gray-600'>Resources</li>
            <li className='p-2 border-b border-gray-600'>About </li>
            <li className='p-2 border-b border-gray-600'>Contact</li>
            <li className='p-2'>Company</li>
        </ul>

        </div>
        
    
    </>
  )
}

export default NavBar