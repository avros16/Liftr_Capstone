import React from 'react'
import GlutesContainer from './GlutesContainer'
import './Glute.css'



function Glute ({glutes, user}) {
    return (


  <div className="dresults">

<h3 className='title'> Glute Exercises</h3>
<GlutesContainer user={user} glutes={glutes}/>



  </div>
    );
  }
  
  export default Glute;