import React from "react"
import "./ArmCard.css"



function ArmsCard({arm, user}) {
  console.log(user)

  return (
    <div className="armcard">
        <div>
            <img className='armPictures' src={arm.gifUrl} alt="gif" />
        </div>
        <div>
            <h2 className='armDescription'>
                {arm.name} - {arm.target}
            </h2>
            <p className='armequipment'>Equipment: {arm.equipment}</p>
        </div>
    </div>
  )
}

export default ArmsCard