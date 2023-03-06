import React from 'react'
import ArmsCard from './ArmsCard'


function ArmsContainer({arms, user}) {

  return (
    <div>

        <div>
{arms.map((arm)=>(
    <ArmsCard user={user} key={arms.id} arms={arms}/>
))}

        </div>
    </div>
  )
}

export default ArmsContainer