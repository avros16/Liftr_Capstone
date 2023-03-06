import React from "react"



function ArmsCard({arm, user}) {

  console.log(user)
  return (
    <div>
        <div>
            <img src={arm.gifUrl} alt="gif" />
        </div>
        <div>
            <h2>
                {arm.name} - {arm.target}
            </h2>
            <p>Equipment: {arm.equipment}</p>
        </div>
    </div>
  )
}

export default ArmsCard