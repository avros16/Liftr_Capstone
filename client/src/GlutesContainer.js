import React from 'react'
import GlutesCard from './GlutesCard'


function GlutesContainer({glutes}) {

  return (
    <div>

        <div>
{glutes.map((glute)=>(
    <GlutesCard key={glute.id} glute={glute}/>
))}

        </div>
    </div>
  )
}

export default GlutesContainer