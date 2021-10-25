import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/userlogo.png";

const MessageItem=({date,profileImageUrl,text,username,removeMessage, isCorrectUser})=>(
        
        <li className="list-group-item">
        <img src={profileImageUrl||DefaultProfileImg} alt={username} width="100" height="100" className="timeline-image"/>
        <div className="message-area">
            <div className="header">
            <Link to="/" className="user-Profile">@{username}&nbsp;</Link>
            <p>{new Date(parseInt(date,16)*1000).toDateString()}</p>
            </div>
            <span className="text-muted">
                    <p>{text}</p>
            </span>
            { isCorrectUser&&( <a className="btn btn-danger" onClick={removeMessage}>Remove Message</a>)}
           
        </div>
        </li>

);

export default MessageItem;