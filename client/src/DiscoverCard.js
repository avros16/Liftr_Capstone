import React, {useState, useEffect} from "react"
import "./DiscoverCard.css"




function DiscoverCard({exercise}) {

  return (
  <div className="box">
  <div>
      <img src={exercise.gifUrl} alt="gif" />
  </div>
  <div>
      <h2>
          {exercise.name} - {exercise.target}
      </h2>
      <p>Equipment: {exercise.equipment}</p>
  </div>
</div>
    );
  }
  
  export default DiscoverCard;