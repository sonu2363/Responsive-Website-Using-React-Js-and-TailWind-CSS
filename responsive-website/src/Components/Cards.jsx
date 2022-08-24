import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white w-full py-14'>
      <div className=' grid md:grid-cols-3 gap-8 md:my-4 '>
        <div className='mx-auto shadow-xl flex flex-col text-center hover:scale-105 duration-300 '>


      <img className='w-20 mx-auto ' src={Double} alt=''></img>
        <h2 className='text-2xl font-bold '>Double User</h2>
        <p className='text-4xl font-bold'>$149</p>
        <p className='py-1 border-b'>Send up to 2GB</p>
        <p className='py-1 border-b'>1 Granted User</p>
        <p className='py-1 border-b'>Send up to 2 GB</p>
        <button className='bg-green-600 font-medium  text-black md:p-4 md:mx-8 p-2 rounded-md my-6 mx-auto md:w-[200px] w-[100px] '>Start Trial</button>
        </div>
        <div className='mx-auto shadow-xl flex flex-col text-center  hover:scale-105 duration-300 '>


      <img className='w-20 mx-auto  ' src={Single} alt=''></img>
        <h2 className='text-2xl font-bold '>Single User</h2>
        <p className='text-4xl font-bold'>$149</p>
        <p className='py-1 border-b'>Send up to 2GB</p>
        <p className='py-1 border-b'>1 Granted User</p>
        <p className='py-1 border-b'>Send up to 2 GB</p>
        <button className='bg-black font-medium  text-green-600 md:p-4 md:mx-8 p-2 rounded-md my-6 mx-auto md:w-[200px] w-[100px] '>Start Trial</button>
        </div>
        <div className='mx-auto shadow-xl flex flex-col text-center  hover:scale-105 duration-300 '>


      <img className='w-20 mx-auto ' src={Triple} alt=''></img>
        <h2 className='text-2xl font-bold '>Triple User</h2>
        <p className='text-4xl font-bold'>$149</p>
        <p className='py-1 border-b'>Send up to 2GB</p>
        <p className='py-1 border-b'>1 Granted User</p>
        <p className='py-1 border-b'>Send up to 2 GB</p>
        <button className='bg-green-600 font-medium  text-black md:p-4 md:mx-8 p-2 rounded-md my-6 mx-auto md:w-[200px] w-[100px] '>Start Trial</button>
        </div>
      
      </div>


    </div>
  )
}

export default Cards