import React from 'react'
import { useState , useEffect} from "react"
import UserCard from "./UserCard";
const User = () => {
    const [user , setUser] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUser(json))
    .then(json => console.log(json))
    },[])
    
    return (
      <div className="App">
  
    <div className='cardd'>
      {user.map(el =><UserCard user={el} key={el.id}/>)
  
      }
    </div>
      </div>
    );
  }
export default User
