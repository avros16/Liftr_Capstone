import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import './NavBar.css'

function NavBar({user, logOut, onChangePage}) {
    const navigate = useNavigate();
    function handleClick() {
    localStorage.removeItem('jwt');
    logOut(null);
navigate('/Login');
    }
    return (
<div className="NavBar">
<img className="img" src="https://i.ibb.co/pjnH9fN/Logo-liftr-removebg-preview.png" alt="body"/>
<h3 className="h3"> Designed to CRUSH plateaus</h3>

<nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/Journey">Journey</NavLink>
        <NavLink exact to="/Discover">Discover</NavLink>
        <NavLink exact to="/MealPlans">Meal Plans</NavLink>
        {user.empty? 
        (<NavLink exact to="/">Home</NavLink>)
            :
            (<NavLink exact to="/Profile">Profile</NavLink>)
    }
    <NavLink exact onClick={handleClick}>Logout</NavLink>
        

        
</nav>
</div>

    );
  }

  export default NavBar;