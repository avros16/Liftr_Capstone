import React from 'react'
import GlutesCard from './GlutesCard'


function GlutesContainer({glutes, user}) {

  return (
    <div>

        <div>
{glutes.map((glute)=>(
    <GlutesCard user={user} key={glute.id} glute={glute}/>
))}

        </div>
    </div>
  )
}

export default GlutesContainer