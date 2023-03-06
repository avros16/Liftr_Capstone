import React, {useState, useEffect} from "react"
import "./DiscoverCard.css"




function DiscoverCard({exercise, user}) {


    const [heart, setHeart] = useState(true)

    function handleSubmit () {
    fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            exercise_id: exercise.id,
            user_id: user.id
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        alert("Exercise has been added to your Favorites list")
    })
    setHeart(!heart)
}
  return (

  <div className="box">
  <div>
      <img className="imgs" src={exercise.gifUrl} alt="gif" />
  </div>
  <div>
      <h2>
          {exercise.name} - {exercise.target}
      </h2>
      <p>Equipment: {exercise.equipment}</p>
  </div>
  <div> 
    <button className="fav-button" onClick={handleSubmit}> {heart ? "♡" : "🤍 "} Add to Favorites </button>
  </div>
</div>
    );
  }
  
  export default DiscoverCard;