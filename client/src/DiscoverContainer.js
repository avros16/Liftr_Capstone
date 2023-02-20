import React from 'react'
import DiscoverCard from "./DiscoverCard"



function DiscoverContainer({exercises}) {
    return (

<div>

{exercises.map((exercise) => (
        <DiscoverCard key={exercise.id} exercise={exercise} />
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