import React, {useState} from "react";
import { NavLink } from "react-router-dom"
import './NavBar.css'

function NavBar({onChangePage}) {

    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    return (
<div className="NavBar">
<img className="img" src="https://i.ibb.co/pjnH9fN/Logo-liftr-removebg-preview.png"/>
<h3 className="h3"> Designed to CRUSH plateaus</h3>

<nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/Journey">Journey</NavLink>
        <NavLink exact to="/Discover">Discover</NavLink>
        <NavLink exact to="/MealPlans">Meal Plans</NavLink>
        <NavLink exact to="/Profile">Profile</NavLink>
        
</nav>
</div>

    );
  }

  export default NavBar;