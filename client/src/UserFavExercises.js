import React, {useState, useEffect} from 'react'

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
            <p> hi</p>
            <div>
                <p>hi</p>
            </div>
<h3> fav exercises</h3>
{fav.map((exercise) => (
<div>
            <div>
      <img className="imgs" src={exercise.gifUrl} alt="gif" />
           </div>
             <div>
      <h2>
          {exercise.name} - {exercise.target}
      </h2>
      <p>Equipment: {exercise.equipment}</p>
            </div>
            <button onClick={()=>{deleteFav(exercise.id)}}>Delete</button>
</div>
            ))}
       </div>
    )
}

export default UserFavExercises;