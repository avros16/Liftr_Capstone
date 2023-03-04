import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"


function Login({onLogin}) {
  const [log, setLog] = useState(true)
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(username,"you just attempted to login", data);
        localStorage.setItem("jwt", data.token)
        navigate("/")
        onLogin(data.user);
      });
  };
    function handleSignUp(e) {
      console.log(newUser, newPassword, email)
      e.preventDefault();
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: newUser,
          password: newPassword,
          email: email
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data,"you just created an account!")
           localStorage.setItem("jwt", data.token);
          // navigate("/Account")
                    setNewUser("");
                    setNewPassword("");
                    setEmail("");
                    alert("signed up success")
                    setLog(true)
                    // navigate("/Login")
        })
      }
      function handleClick() {
       setLog(!log)
      }
  return (
    <div>
      { log ? (
        <div className= "main">
          <div className="sign">
          <p align="center"> Login </p>
          </div>
    <form onSubmit={handleSubmit}>
      <div className="text">
      </div>
      <input
        type="text"
        className="un"
        placeholder="Username"
  
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br/>
      <input
        type="password"
        className="pass"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br/>
      <input type="submit" className="submit" value="login"></input>
    </form>
   </div>
      ) : (
      <div className="main">
        <h4 align="center" className="sign" >Sign Up</h4>
    <form onSubmit={handleSignUp}>
      
      <input type="text" placeholder="Enter username" className="un" value={newUser} onChange={(e) => setNewUser(e.target.value)}></input>
      <input type="password" placeholder="Enter password" className="pass" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
      <input type="Email" placeholder="Email" className="pass" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="submit" className="submit"value="Sign Up"/>
    </form>
     </div>
      )
    }
    <p className="accountOnclick"   align="center" onClick={handleClick}>{log ? "Don't have an account? Sign up!" : "Have an account? Login!" }</p>
      </div>
  )
}
export default Login