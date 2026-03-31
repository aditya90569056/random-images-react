import React from 'react'


function footer() {
  return (
    <div>
         <div className='h-40 w-full bg-gray-900 display flex  justify-center text-white font-bold text-2xl p-20 border-4 border-gray-700 rounded-lg  '>
            <ul className='display flex gap-10 items-center w-full justify-center'>
                <li className='hover:text-gray-600 duration-300 display flex'>Home
                
                
                </li>
                <li className='hover:text-gray-600  duration-300'>About</li>
                <li className='hover:text-gray-600  duration-300'>Contact Us</li>
                <li className='hover:text-gray-600  duration-300'>Privacy Policy</li> 
            </ul>
         </div>
    </div>
  )
}

export default footer