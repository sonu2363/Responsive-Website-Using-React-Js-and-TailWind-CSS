import React from 'react';
import Laptops from'../Assets/Laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='mx-auto grid md:grid-cols-2'>
            <img src={Laptops} alt=''></img>
            <div className='justify-center flex flex-col text-center'>

            <p className='font-bold text-green-600'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='font-bold sm:text-3xl py-2 md:text-4xl'>Manage Data Analytics Centrally</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat similique porro, qui sapiente inventore quod, animi repudiandae dolorem cumque rem, aut ex possimus deserunt molestiae. Laboriosam praesentium repellat rem.
            </p>
            <button className='bg-[#000300] font-medium  text-green-600 md:p-4  p-2 rounded-md my-6 mx-auto md:w-[200px] w-[100px]'>Get Started</button>

            </div>

        </div>

    </div>
  )
}

export default Analytics