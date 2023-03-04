import React from 'react'
import DiscoverContainer from './DiscoverContainer'


function Discover({exercises}) {



    return (
  <div>
    <div> 
      <h1> Discover New Exercises </h1>


      </div>

<DiscoverContainer exercises={exercises} />

<div>





{/* {exercises?.map((exercise) => (
        <DiscoverContainer key={exercise.id} exercise={exercise} />
      ))} */}
</div>

</div>





    );
  }

  export default Discover;