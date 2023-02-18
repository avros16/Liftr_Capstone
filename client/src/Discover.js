import React, { useEffect, useState } from 'react'


function Discover() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/exercises')
    // credentials: 'include' for auth
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


    return (
  <p>

<div>
    {data.map(item => <div key={item.id}>{item.name}</div>)}

    
  </div>




  </p>
    );
  }
  
  export default Discover;