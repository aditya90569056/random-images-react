import React from 'react'
// import { RiEmotion2Fill } from 'remixicon-react/RiEmotion2Fill';
import Footer from './footer';
function section2() {
  const array=['https://picsum.photos/300/400?random=${Math.random()}',
    'https://picsum.photos/300/400?random=${Math.round(Math.random()*2)}',
    'https://picsum.photos/300/400?random=${Math.floor(Math.random()*4)}',
    'https://picsum.photos/1080/720?random=${Math.ceil(Math.random()*6)}',
    'https://picsum.photos/700/800?random=${Math.floor(Math.random()*8)',
    'https://picsum.photos/300/400?random=${Math.round(Math.random()*10)}',
    'https://picsum.photos/300/400?random=${Math.floor(Math.random()*12)}',
    'https://picsum.photos/700/800?random=${Math.round(Math.random()*114)}',
  ];
 
  
  return (
    <div className='h-screen w-full bg-gray-300 gap-5 p-10 display flex  flex-col items-center'>
    <h1 className='   text-gray-800 rounded-sm  font-black'>Random Images
    {/* <RiEmotion2Fill /> */}
    
    </h1>
       <div className='h-screen w-full bg-gray-300 display flex  items-center justify-center gap-5 p-10'>
        {/* <h1 className='color-white'>Random Images</h1> */}

    { 
      [1,2,3,4,5].map((item)=>{
        const index = Math.floor(Math.random() * array.length);
        return (
          <div key={item} className='h-80 w-80 rounded-lg display flex items-center justify-center text-3xl text-white font-bold cursor-pointe'>
            <img src={array[index]} alt="" className='h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 delay-55 cursor-pointe' />  
          </div>
        );
      })
    }
      
    
    
    
   
    </div>
    <Footer />
    </div>
    
  )
}

export default section2

