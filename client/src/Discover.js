import React from 'react'
import DiscoverContainer from './DiscoverContainer'


function Discover({exercises}) {



    return (
  <div>

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