import React from 'react'
import Card_form from './Card_form'

function Cards_Form({users}) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto flex justify-center gap-4 p-4 flex-wrap'>
        {users.map((item,index)=>{
         return<Card_form key={index} users={users}/>
        })}
     
    </div>
  )
}

export default Cards_Form