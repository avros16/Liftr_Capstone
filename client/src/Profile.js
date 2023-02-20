import React, { useState } from "react";







function Profile({ user }) {
  const [update, setUpdate] = useState(true);
  const [displayA, setDisplayA] = useState(true)
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  // const [email, setEmail] = useState('');
 
  // const [username, setUsername] = useState(user.username);
  const [weight, setWeight] = useState(user.weight);
  const [goal, setGoal] = useState(user.goal);
  const [personalBestSquat, setPersonalBestSquat] = useState(user.personalBestSquat);
  const [personalBestBench, setPersonalBestBench] = useState(user.personalBestBench);

  const [personalBestMile, setPersonalBestMile] = useState(user.personalBestMile);

  const [personalBestDeadlift, setPersonalBestDeadlift] = useState(user.personalBestDeadlift);

  const [bodyFatPercentage, setBodyFatPercentage] = useState(user.bodyFatPercentage);



  function handleClick() {
    setUpdate(!update);
  }
 
  function handleDisplay(){
    setDisplayA(!displayA);
  }
// add current data to this page !!!!!!!!!
  // request to make a update to account
  
        function handleSubmit(e) {
          console.log(
            firstName,
            lastName,
            weight,
            goal,
            personalBestSquat,
            personalBestBench,
            personalBestMile,
            personalBestDeadlift,
            bodyFatPercentage
            // email
          );
          e.preventDefault();
          fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              // email: email,
              weight: weight,
              goal: goal,
              personalBestSquat: personalBestSquat,
              personalBestBench: personalBestBench,
              personalBestMile: personalBestMile,
              personalBestDeadlift: personalBestDeadlift,
              bodyFatPercentage: bodyFatPercentage
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "you just updated your account!");
              alert("Account updated");
            });
        }
  return (
    <div>
        {displayA ?
        (<p> </p>
        ) : (
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {user.email}</p>
            <p>goal: {goal}</p>
            <p>weight: {weight}</p>
            <p>personalBestSquat: {personalBestSquat}</p>
            <p>personalBestBench: {personalBestBench}</p>
            <p>personalBestMile: {personalBestMile}</p>
            <p>personalBestDeadlift: {personalBestDeadlift}</p>
            <p> bodyFatPercentage: {bodyFatPercentage}</p>
            </div>
        )}
        <h3 className="displayButton" onClick={handleDisplay}>
        {displayA ? "Account Information" : "Hide Account Information" }
        </h3>
      {/* update account form */}
      {update ? (
        <p> </p>
      ) : (
        <form className="update-Account" onSubmit={handleSubmit}>
          <label>First Name: </label>
          <input className="accountInput"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Last Name: </label>
          <input className="accountInput"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Weight: </label>
          <input className="accountInput"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          {/* <label>Email: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /> */}
          <label>Goal: </label>
          <input className="accountInput"
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <br />
          <label>Personal Best Squat: </label>
          <input className="accountInput"
            type="text"
            value={personalBestSquat}
            onChange={(e) => setPersonalBestSquat(e.target.value)}
          />
          <br />
          <label>Personal Best Bench: </label>
          <input className="accountInput"
            type="text"
            value={personalBestBench}
            onChange={(e) => setPersonalBestBench(e.target.value)}
          />
          <br />
          <label>Personal Best Mile: </label>
          <input className="accountInput"
            type="text"
            value={personalBestMile}
            onChange={(e) => setPersonalBestMile(e.target.value)}
          />
          <br />
          <label>Personal Best Deadlift: </label>
          <input className="accountInput"
            type="text"
            value={personalBestDeadlift}
            onChange={(e) => setPersonalBestDeadlift(e.target.value)}
          />
          <br />

          <label>Body Fat Percentage: </label>
          <input className="accountInput"
            type="text"
            value={bodyFatPercentage}
            onChange={(e) => setBodyFatPercentage(e.target.value)}
          />



          <input className='accountButton' type="Submit" value="Update Account" />
        </form>
      )}
      <h3 className="updateButton" onClick={handleClick}>
        {update ? "Update Account" : "Account up-to date"}
      </h3>
      
    </div>
  );
}
export default Profile;