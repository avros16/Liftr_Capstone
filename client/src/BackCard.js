import React from "react"



function BackCard({back, user}) {

  console.log(user)
  return (
    <div>
        <div>
            <img src={back.gifUrl} alt="gif" />
        </div>
        <div>
            <h2>
                {back.name} - {back.target}
            </h2>
            <p>Equipment: {back.equipment}</p>
        </div>
    </div>
  )
}

export default BackCard