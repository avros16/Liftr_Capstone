import React from 'react'
import DiscoverCard from "./DiscoverCard"
import "./DiscoverContainer.css"


function DiscoverContainer({exercises,user}) {
    return (

<div className="results">

{exercises.map((exercise) => (
        <DiscoverCard key={exercise.id} exercise={exercise} user={user} />
      ))}


{/* <img src={exercise.gifUrl} alt="gif" />
        <div>
      <div className="exercise-card-info">
        <h2 className="favE">
          {exercise.name} - {exercise.target}
        </h2>
        <p className="favE"> Equipment: {exercise.equipment}</p>
      </div>
      </div> */}


</div>

    );
  }
  
  export default DiscoverContainer;