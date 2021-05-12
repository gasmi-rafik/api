
import React from 'react'
import { useState , useEffect} from "react"

import "./UserProfile.css"
const UserProfile = (props) => {
    const [profile , setProfile] = useState([])
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
    .then(response => response.json())
    .then(json => setProfile(json))
    
    },[])
    
    return (
        
<div className="container-fluid">
    <div className="row">
        <div className="profile-head">
            <div className="profiles col-xs-8 col-xs-push-2  col-sm-10 col-sm-push-1 thumbnail">
                <div className="col-md-3 col-sm-3 col-xs-12">
                    <div className="row">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-responsive" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <span className="col-sm-12"><h5>{profile.name}</h5></span>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <p>Web Designer / Develpor </p>
                            <ul>
                                <li><span>username</span></li>
                                <li><span>email</span></li>
                                <li><span>address</span></li>
                                <li><span>phone</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <p>Web Designer / Develpor </p>
                            <ul>
                                <li><span>{profile.username}</span></li>
                                <li><span>{profile.email}</span></li>
                                <li><span>{ 
             profile
                &&
                profile.address
                 &&
                 profile.address.street
                 } ,  { 
                    profile
                       &&
                       profile.address
                        &&
                        profile.address.suite
                        } , { 
                            profile
                               &&
                               profile.address
                                &&
                                profile.address.city
                                }</span></li>
                                <li><span>{profile.phone}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
    )
}

export default UserProfile
