import React, {useState, useEffect} from 'react'

function UserFavExercises ({user}) {
    const [fav, setFav] = useState ({})

    console.log(user)

    useEffect(() => {
        fetch("/fav")
        // , {}
            // headers: {
            //     Authorization: 'Bearer ${localStorage.getItem('jwt')}',
            // },
        // })
        .then((res) => res.json())
        .then((data) => {
            setFav(data)
            console.log(data, "faved exercises from fetch in userFavEx component");
        });
    }, []);
        console.log(fav)


    return (
        <div> 
            <p> hi</p>
        </div>
//         <div>
//             <div>
//                 <p>hi</p>
//             </div>
// <h3> fav exercises</h3>
// {fav.map((exercise) => (
// <div>
//             <div>
//       <img className="imgs" src={exercise.gifUrl} alt="gif" />
//            </div>
//              <div>
//       <h2>
//           {exercise.name} - {exercise.target}
//       </h2>
//       <p>Equipment: {exercise.equipment}</p>
//             </div>
// </div>
//             ))}
//        </div>
    )
}

export default UserFavExercises;