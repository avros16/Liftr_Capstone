import React from 'react'
import BackCard from './BackCard'


function BackContainer({back, user}) {

  return (
    <div>

        <div>
{back.map((glute)=>(
    <BackCard user={user} key={back.id} back={back}/>
))}

        </div>
    </div>
  )
}

export default BackContainer