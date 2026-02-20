import React from 'react'

function Navbar1() {
  return (
    <div className='w-full  px-20 py-3 flex justify-between items-center' >
        <h3>Orange</h3>
        <div className='flex p-4 text-sm bg-orange-600 text-white rounded-md gap-2'>
            <h3> Favourites</h3>
            <h4>2</h4>
        </div>
    </div>
  )
}

export default Navbar1