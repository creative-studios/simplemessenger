import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES,REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages=messages=>({
    type:LOAD_MESSAGES,
    messages
});
export const removeMessage=id=>({
    type:REMOVE_MESSAGE,
    id
});
export const fetchMessages=()=>{
    return dispatch=>{
        return apiCall("get","api/messages").then(res=>{
            dispatch(loadMessages(res));
        }).catch(err=>dispatch(addError(err.message)));
    };
};


export const postNewMessage=text=>(dispatch,getState)=>{
    let {currentUser}=getState();
    const id=currentUser.user.id;
    return apiCall("post",`/api/users/${id}/messages`,{text})
    .then(res=>{})
    .catch(err=>{
        dispatch(addError(err.message));
    });
}

export const deleteMessage=(userId,messageId)=>{
    return dispatch=>{
        return apiCall("delete",`/api/users/${userId}/messages/${messageId}`,)
        .then(()=>{dispatch(removeMessage(messageId))})
        .catch(err=>{
            dispatch(addError(err.message));
        });
    }
   
}