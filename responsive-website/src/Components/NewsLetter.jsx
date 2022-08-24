import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-12 px-4 text-white'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow ?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='flex  sm:flex-row flex-col items-center justify-center '>
                <input className='p-2 md:w-full flex' type={'email'} placeholder='Enter Email'></input>
                <button className='bg-green-600 font-medium  text-[#000300] p-2 rounded-md my-6 mx-2 md:w-[200px] w-[100px]'>Notify Me</button>
                

            </div>

        
        </div>
        </div>
  )
}

export default NewsLetter