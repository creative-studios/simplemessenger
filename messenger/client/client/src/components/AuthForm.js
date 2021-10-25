import React , {Component} from "react";

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            profileImageUrl:""
        };
    }
    handleSubmit=e=>{
        e.preventDefault();
        const authType=this.props.signup?"signup":"signin";
        this.props.onAuth(authType,this.state).then((res)=>{
            this.props.history.push("/");
        }).catch(()=>{
            return;
        });
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    render(){
        const {username,email,password,profileImageUrl}=this.state;
        const {heading,buttonText,signup,errors,history,removeError}=this.props;
        history.listen(()=>{
            removeError();
        });
        return(
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form action="" onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message&&(
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
                            <label htmlFor="email">Email</label>
                            <input 
                            className="form-control"
                            id="email"
                            name="email"
                            type="text" 
                            htmlFor="email" 
                            value={email} 
                            onChange={this.handleChange}
                            />
                            <label htmlFor="password">Password</label>
                            <input 
                            className="form-control"
                            id="password"
                            name="password"
                            type="password" 
                            htmlFor="password" 
                            
                            onChange={this.handleChange}
                            />
                            {signup&&(
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    type="text" 
                                    htmlFor="text" 
                                    value={username} 
                                    onChange={this.handleChange}/>
                                    <label htmlFor="text">Profile Image</label>
                                    <input 
                                    className="form-control"
                                    id="image-url"
                                    name="profileImageUrl"
                                    type="text" 
                                    htmlFor="text" 
                                    value={profileImageUrl} 
                                    onChange={this.handleChange}/>
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary btn-block btn-lg">{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}