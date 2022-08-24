import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='page py-16 w-full text-white m-4'>
        <div className='container lg:grid lg:grid-cols-2'>
            <div className='Elem1'>

        <h1 className='text-3xl font-bold  text-green-600'>REACT.</h1>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi laboriosam ab aliquam saepe voluptatem fugiat possimus reprehenderit! Fugiat, maxime quis. Est quisquam saepe nobis consequuntur accusantium, ab numquam assumenda!</p>
        <div className='Elem2 flex justify-between py-4 md:w-[75%] w-[30%]'>
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
        </div>
            </div>
        
        <div className='flex py-6 Elem3'>
            <div>
        <h1 className='font-medium text-gray-400'>Solution</h1>
            <ul >
             
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
            </div>
            <div className='px-4'>
            <h1 className='font-medium text-gray-400'>Support</h1>
            <ul>
                
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
            </ul>
            </div>
            <div className='px-4'>
            <h1 className='font-medium text-gray-400'>Company</h1>
            <ul>
                
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                
                <li>Careers</li>
            </ul>
            </div>
        </div>
        </div>

        </div>
  )
}

export default Footer