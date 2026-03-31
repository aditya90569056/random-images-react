import React from 'react'
import LeftContent from './leftContent';
import RightContent from './rightContent';
const page1content = () => {
  return (
    <div className='py-10 gap-10 items-center h-[90vh] bg-gray-400 px-18 display flex'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default page1content