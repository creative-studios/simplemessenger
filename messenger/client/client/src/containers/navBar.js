import React ,{Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import siteLogo from "../images/site logo 2.png";
import { logout } from "../store/actions/auth";
class NavBar extends Component{
    logout= e=>{
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return(
            <div className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={siteLogo} alt="Warbler Home"/>
                    </Link>
                </div>
                {this.props.currentUser.isAuthenticated?(
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to={`users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link></li>
                        <li><a onClick={this.logout}>Log Out</a></li>
                    </ul>
                ):(
                <div className="nav navbar-nav navbar-right">
                    <Link to="/signup" className="btn btn-primary">Sign up</Link>
                    <Link to="/signin" className="btn btn-primary">Sign in</Link>
                </div>)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        currentUser:state.currentUser
    };
}

export default connect(mapStateToProps,{logout})(NavBar);