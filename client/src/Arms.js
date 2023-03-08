import React from 'react'
import ArmsContainer from './ArmsContainer'
import './Arms.css'

function Arms ({arms, user}) {
  
    return (

  <div>

<h3 className='armtitle'> Arm Exercises</h3>
<ArmsContainer user={user} arms={arms}/>



  </div>
    );
  }
  
  export default Arms;