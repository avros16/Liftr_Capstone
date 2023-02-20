import React from 'react';
import './WelcomePage.css'
import { useLocation, useNavigate} from 'react-router-dom';

function WelcomePage({user}) {

      const location = useLocation();
      const state = location.state;
      const navigate = useNavigate();
      console.log(location)
      console.log(state)

      function handleClick() {
            navigate('/glutes', { state: {user} })



      //   const newUrl = ('/glutes', { state: {user} }); 
      //   window.location.href = newUrl;
      }


    return (
  <div className="start"> 

<p>
Welcome to our fitness website! We are here to inspire and empower you to live your healthiest life. Our team of certified trainers, nutritionists, and wellness experts have come together to bring you the best resources and information to help you reach your fitness goals. Whether you're a seasoned athlete or just starting your fitness journey, we've got you covered. From workout plans and healthy recipes to expert advice and community support, our website is your one-stop-shop for all things fitness. So, let's get started and take your fitness to the next level!
</p>

<div className="innerSection">




   <div className="buttonSection"> <button className="button"> <h3>Click here to start </h3></button> </div>
</div>

<div className="innerSection">
<div>

      <div class="text">
<img id="front"src="https://i.ibb.co/0GC2Ywr/IMG-9813-removebg-preview.png" alt="IMG-9813-removebg-preview" border="0" onClick={handleClick}/>
      </div>
      <div class="text">
<img id="front"src="https://i.ibb.co/HnJmMfF/IMG-9812-removebg-preview.png" alt="IMG-9812-removebg-preview" border="0" onClick={handleClick}/>
      </div>
      <div>
<img id="front"src="https://i.ibb.co/JdL8Sgy/IMG-9811-removebg-preview.png" alt="IMG-9811-removebg-preview" border="0" onClick={handleClick} />
      </div>
      <div>
<img id="front"src="https://i.ibb.co/W5vvqzM/IMG-9810-removebg-preview.png" alt="IMG-9810-removebg-preview" border="0"onClick={handleClick} />
      </div>
      <div>
<img id="front"src="https://i.ibb.co/bWNhFHd/IMG-9806-removebg-preview.png" alt="IMG-9806-removebg-preview" border="0" />
      </div>
</div>



<div id="Back">

<img id="back"src="https://i.ibb.co/6rCgggJ/IMG-9822-removebg-preview.png" alt="IMG-9822-removebg-preview" border="0"/>
<img id="back"src="https://i.ibb.co/cgtnkJ7/IMG-9821-removebg-preview.png" alt="IMG-9821-removebg-preview" border="0"/>
<img id="back"src="https://i.ibb.co/xYH1Vs5/IMG-9820-removebg-preview.png" alt="IMG-9820-removebg-preview" border="0"/>
<img id="back"src="https://i.ibb.co/YXpZ9Vc/IMG-9819-removebg-preview.png" alt="IMG-9819-removebg-preview" border="0"/>
<img id="back"src="https://i.ibb.co/VtqJcHS/IMG-9818-removebg-preview.png" alt="IMG-9818-removebg-preview" border="0"/>



</div>
  </div>
  </div>
    );
  }
  
  export default WelcomePage;