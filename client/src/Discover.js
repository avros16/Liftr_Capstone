import React from 'react'
import DiscoverContainer from './DiscoverContainer'


function Discover({exercises, user}) {



    return (
  <div>
    <div> 
      <h1> Discover New Exercises </h1>


      </div>

<DiscoverContainer exercises={exercises} user={user} />

<div>





{/* {exercises?.map((exercise) => (
        <DiscoverContainer key={exercise.id} exercise={exercise} />
      ))} */}
</div>

</div>





    );
  }

  export default Discover;