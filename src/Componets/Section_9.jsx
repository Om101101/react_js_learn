import React from 'react'

function Section_9({data}) {
    const { image, artist , added, name}=data 
  return (
    <div className='w-60 bg-zinc-500 p-4 rounded-md flex gap-4 pb-10 relative mt-10'>
        <div className='w-20 h-20 rounded-md bg-orange-500 '>
            <img className="w-full h-full object-cover " src="{image} " alt="" />
        </div>
        <div>
            <h3 className='text-xl leading-none font-semibold'>{name} </h3>
            <h6 className='text-sm '>{artist} </h6>
        </div>
        <button className='px-4 py-3 whitespace-nowrap bg-orange-600 absolute text-white text-sm rounded-full bottom-0  left-1/2 -translate-x-[50%]  translate-y-[50%]'>Add to Favourites</button>
    </div>
  )
}

export default Section_9