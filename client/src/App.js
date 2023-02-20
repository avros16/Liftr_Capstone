import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage'
import Discover from './Discover'
import Profile from './Profile'
import Journey from './Journey'
import MealPlans from './MealPlans'
import './app.css'
import Glute from './Glute'
import Login from './Login'
// import Calves from './Calves'
// import Qauds from './Quads'
// import Hamstrings from './Hamstrings'
// import Abs from './Abs'
// import Chest from './Chest'
// import Arms from './Arms'
// import Back from './Back'


function App() {
  const [page, setPage] = useState("/")
console.log(page)

 const [user, setUser] = useState(null)
  const [exercises, setExercises] = useState([]);
  const [glutes, setGlutes]= useState([])
  const [arms, setArms] = useState ([])
  const [chest, setChest] = useState ([])
  const [abs, setAbs] = useState ([])
  const [back, setBack] = useState ([])
  
//  const [pectorals, setPectorals] = useState ([])



  useEffect(() => {


        fetch('/exercises')
        // credentials: 'include' for auth
          .then(response => response.json())
          .then(exercises => setExercises(exercises))
          .catch(error => console.error(error));
      }, []);
    console.log(exercises, "this is ex fetch");


    useEffect(() => {


      fetch('/abs')
      // credentials: 'include' for auth
        .then(response => response.json())
        .then(abs => setAbs(abs))
        .catch(error => console.error(error));
    }, []);
  console.log(abs, "this is abs fetch");


    useEffect(() => {


      fetch('/chest')
      // credentials: 'include' for auth
        .then(response => response.json())
        .then(chest => setChest(chest))
        .catch(error => console.error(error));
    }, []);
  console.log(chest, "this is chest fetch");




    useEffect(() => {
      fetch('/back')
      // credentials: 'include' for auth
        .then(response => response.json())
        .then(back => setBack(back))
        .catch(error => console.error(error));
    }, []);
  console.log(back, "this is back fetch");




    useEffect(() => {


      fetch('/arms')
      // credentials: 'include' for auth
        .then(response => response.json())
        .then(arms => setArms(arms))
        .catch(error => console.error(error));
    }, []);
  console.log(arms, "this is arms fetch");



  //   useEffect(() => {


  //     fetch('/pectorals')
  //     // credentials: 'include' for auth
  //       .then(response => response.json())
  //       .then(pectorals => setPectorals(pectorals))
  //       .catch(error => console.error(error));
  //   }, []);
  // console.log(pectorals);


    useEffect(() => {



      fetch('/glutes')
      // credentials: 'include' for auth
        .then(response => response.json())
        .then(glutes => setGlutes(glutes))
        .catch(error => console.error(error));
    }, []);
  console.log(glutes, "this is glutes fetch");

  useEffect(() => {
    fetch("/me",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
      response.json().then((data) => setUser(data.user));
         }
   });
  }, []);
  console.log(user)
  if (!user) return(<div className="login"><Login onLogin={setUser}/></div>);
  

  return (
 <div>
  <NavBar onChangePage={setPage} logOut={setUser} user={user}/>
            <Routes>
              <Route exact path='/' element={<div> <WelcomePage user={user}/> </div>} />
              <Route exact path='/login' element={<div> <Login /> </div>} />
              <Route exact path='/Discover' element={<div> <Discover exercises={exercises} user={user}/> </div>} />
              <Route exact path='/MealPlans' element={<div> <MealPlans user={user}/> </div>} />
              <Route exact path='/Journey' element={<div> <Journey user={user}/> </div>} />
              <Route exact path='/Profile' element={<div> <Profile user={user}/> </div>} />
              <Route exact path='/glutes' element={<div><Glute user={user} glutes={glutes} /> </div>} />

{/* 

              <Route exact path='/Glute' element={<div><Glute /> </div>} />
              <Route exact path='/Calves' element={<div><Calves /> </div>} />
              <Route exact path='/Quads' element={<div><Qauds /> </div>} />
              <Route exact path='/Hamstrings' element={<div><Hamstrings /> </div>} />
              <Route exact path='/Abs' element={<div><Abs/> </div>} />
              <Route exact path='/Chest' element={<div><Chest /> </div>} />
              <Route exact path='/Arms' element={<div><Arms /> </div>} />
              <Route exact path='/Back' element={<div><Back /> </div>} /> */}
            </Routes>
        </div>

  );
}

export default App;
