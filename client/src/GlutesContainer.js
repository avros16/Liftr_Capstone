import React from 'react'
import GlutesCard from './GlutesCard'


function GlutesContainer({glutes, user}) {

  return (
    <div className="dresults">

        
{glutes.map((glute)=>(
    <GlutesCard user={user} key={glute.id} glute={glute}/>
))}

        
    </div>
  )
}

export default GlutesContainer