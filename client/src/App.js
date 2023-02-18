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
import Calves from './Calves'
import Qauds from './Quads'
import Hamstrings from './Hamstrings'
import Abs from './Abs'
import Chest from './Chest'
import Arms from './Arms'
import Back from './Back'


function App() {
  const [page, setPage] = useState("/")


  return (
 <div>
  <NavBar onChangePage={setPage} />
            <Routes>
              <Route exact path='/' element={<div> <WelcomePage /> </div>} />
              <Route exact path='/Discover' element={<div> <Discover /> </div>} />
              <Route exact path='/MealPlans' element={<div> <MealPlans /> </div>} />
              <Route exact path='/Journey' element={<div> <Journey /> </div>} />
              <Route exact path='/Profile' element={<div> <Profile /> </div>} />




              <Route exact path='/Glute' element={<div><Glute /> </div>} />
              <Route exact path='/Calves' element={<div><Calves /> </div>} />
              <Route exact path='/Quads' element={<div><Qauds /> </div>} />
              <Route exact path='/Hamstrings' element={<div><Hamstrings /> </div>} />
              <Route exact path='/Abs' element={<div><Abs/> </div>} />
              <Route exact path='/Chest' element={<div><Chest /> </div>} />
              <Route exact path='/Arms' element={<div><Arms /> </div>} />
              <Route exact path='/Back' element={<div><Back /> </div>} />
            </Routes>
        </div>

  );
}

export default App;
