import React, {useState, useEffect} from 'react'
import "./UserFavExercises.css"


function UserFavExercises ({user}) {
    const [fav, setFav] = useState ([])

    console.log(user)

    useEffect(() => {
        fetch("http://localhost:3000/fav",{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          setFav(data)
          console.log(data, "faved exercises from fetch in userfavEx component");
        })
        .catch(e=>console.log(e))
      }, []);
      console.log(fav)

      function deleteFav(id){
        fetch(`http://localhost:3000/favorites/${id}`,{
          method:"DELETE",
          headers:{
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          }
        })
        .then(r=>{
              setFav( fav.filter(exercise => exercise.id !== id) )
        })
        .catch(e=>console.log(e))
      }

    return (
        <div>
<h1> Favorited Exercises</h1>
{fav.map((exercise) => (

  <div className="containerforresults">
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
            <button className="fav-button" onClick={()=>{deleteFav(exercise.id)}}>Delete</button>
</div>
</div>
            ))}
       </div>
    )
}

export default UserFavExercises;