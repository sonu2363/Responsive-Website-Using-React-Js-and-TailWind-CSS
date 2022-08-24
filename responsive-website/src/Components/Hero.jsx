import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className=' flex flex-col w-full h-screen text-center m-auto justify-center py-3'>

        <p className=' font-bold  text-green-600'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl md:text-7xl font-bold'>Grow with data</h1>
        
        <div className='flex justify-center'>
            <p className='sm:font-4xl font-xl font-bold'>Fast , flexible financing for </p>
            <Typed className='sm:font-4xl font-xl font-bold pl-2'
            strings={['BTB','BTC','SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            /> 
        </div>
        <p className='font-bold text-xs sm:text-2xl text-gray-500'>Monitor your data analytics to increase revenue for BTB , BTC , & SASS platforms</p>
        <button className='bg-green-600 md:p-4 p-2 rounded-md my-6 mx-auto md:w-[200px] w-[100px]'>Get Started</button>
        </div>
        </div>
  )
}

export default Hero