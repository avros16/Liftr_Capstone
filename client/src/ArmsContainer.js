import React from 'react'
import ArmsCard from './ArmsCard'
import './ArmsContainer.css'



function ArmsContainer({arms, user}) {

  return (
    <div>

        <div className='armscontainer'>
{arms.map((arm)=>(
    <ArmsCard user={user} key={arms.id} arm={arm}/>
))}

        </div>
    </div>
  )
}

export default ArmsContainer