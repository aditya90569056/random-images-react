import React from 'react'

export const navbar = () => {
  return (
    <div className='flex items-start justify-between py-6 px-16 font-bold bg-gray-200'>
        <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-wider text-sm'>Digital banking platform</button>
    </div>
  )
}
export default navbar;