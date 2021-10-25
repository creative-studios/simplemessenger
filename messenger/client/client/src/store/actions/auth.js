import {apiCall,setTokenHeader} from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError,removeError } from "./errors";
export function setCurrentUser(user){
    return {
        type:SET_CURRENT_USER,
        user
    };
}
export function logout(){
    return dispatch=>{
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token);
}
export function authUser(type,userData){
    console.log(userData);
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/auth/${type}/`,userData).then(({token,...user})=>{
                localStorage.setItem("jwtToken",token);
                dispatch(setCurrentUser(user));
                setAuthorizationToken(token);
                dispatch(removeError());
                resolve();
            }).catch((err) => {

                console.log(err);
                dispatch(addError(err.message));
                reject();
      
              });
        });
    }
}