import React from 'react'

function Card_form({users}) {
  return (
    <>
   {users.map((item, index)=>{
    return <div className='w-52 h-full bg-zinc-200 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-[4vw] h-[4vw] rounded-full bg-zinc-400 overflow-hidden'>
            <img className='w-full h-full object-cover ' src=" " alt="" />
        </div>
        <h1 className='mt-1 text-xl font-semibold' >Om Jaiswa </h1>
        <h4 className='opacity-40 text-sm font-semibold'>xyz@gmail.com</h4>
        <p className=' mt-2 text-center text-xs font-semibold leading-1 tracking-tight' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum cum quia labore.</p>
        <button className='px-3 py-1 bg-red-700 text-xs rounded-lg font-semibold text-white mt-4'> Remove It </button>
    </div>
   })}
   </>
  )
}

export default Card_form