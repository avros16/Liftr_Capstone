import React, { useEffect, useState } from 'react'

function Journey() {


  const [list, setList] = useState([]);

  fetch('http://localhost:3000/fav')
    // credentials: 'include' for auth
      .then(response => response.json())
      .then(list => setList(list))
      .catch(error => console.error(error));
  

    return (
  <p>

{list.map(item => <div key={item.id}>{item.name}</div>)}



  </p>
    );
  }
  
  export default Journey;