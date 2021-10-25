import React from "react";
import DefaultProfileImage from "../images/userlogo.png";

const UserAside=({profileImageUrl,username})=>(
    <aside className="col-sm-02">
        <div className="panel panel-default">
        <div className="panel-body">
            <img src={profileImageUrl||DefaultProfileImage} alt={username}  />
            <p>{username}</p>
        </div>
        </div>
    </aside>
);

export default UserAside;