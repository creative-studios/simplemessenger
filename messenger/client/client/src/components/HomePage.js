import React from "react";
import {Link} from "react-router-dom";
import MessageTimeLine from "./MessageTimeLine";
const HomePage = ({currentUser})=>{
    if(!currentUser.isAuthenticated){
        return(
            <div className="home-hero">
            <h1>Welcome to Beaver</h1>
            <h3>You haven't connect yet?</h3>
            <h4>Try it now. !!</h4>
            <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </div>
        )
    }else{ 
        return (
                <div>
                   <MessageTimeLine profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/>
                </div>
        )}
};

export default HomePage;