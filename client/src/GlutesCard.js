import React from "react"
import "./GeneralCard.css"


function GlutesCard({glute, user}) {

  console.log(user)


  return (
    <div className='card'>
        <div>
            <img className='pictures' src={glute.gifUrl} alt="gif" />
        </div>
        <div>
            <h2 className='description'>
                {glute.name} - {glute.target}
            </h2>
            <p className='equipment'>Equipment: {glute.equipment}</p>
        </div>
    </div>
  )
}

export default GlutesCard