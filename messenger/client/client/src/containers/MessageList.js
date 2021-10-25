import React, {Component} from "react";
import { connect} from "react-redux";
import {fetchMessages,deleteMessage} from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
class MessageList extends Component{
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages,deleteMessage,currentUser}=this.props;
        
        let messagelist=messages.map(m=>(
            
            <MessageItem
                key={m._id}
                date={m._id.toString().substring(0,8)}
                username={m.user.username}
                text={m.text}
                profileImageUrl={m.user.profileImageUrl}
                removeMessage={deleteMessage.bind(this,m.user._id,m._id)}
                isCorrectUser={currentUser===m.user._id}
                />
        ));
        return(
           <div className="row col-sm-10">
               <ul className="list-group" id="messages">
                    {messagelist.reverse()}
               </ul>
           </div>
            
        );
    }
}

function mapStateToProps(state){
    return{
        messages:state.messages,
        currentUser:state.currentUser.user.id
    };
}

export default connect(mapStateToProps,{fetchMessages,deleteMessage})(MessageList);