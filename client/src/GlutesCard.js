import React, {useState, useEffect} from "react"
export


function GlutesCard({glute}) {
  return (
    <div>
        <div>
            <img src={glute.gifUrl} alt="gif" />
        </div>
        <div>
            <h2>
                {glute.name} - {glute.target}
            </h2>
            <p>Equipment: {glute.equipment}</p>
        </div>
    </div>
  )
}

export default GlutesCard