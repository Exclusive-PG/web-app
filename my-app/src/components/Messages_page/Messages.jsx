import React from "react";
import style from "./Messages.module.css";
import TextMessage from "./TextMessage/TextMessage";
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {


let ElementUserDialog = props.state.Dialog.map(dialog =><MessageItem name={dialog.name} id={dialog.id}/> );

let ElementMessageData = props.state.MessagesData.map(message => <TextMessage textMsg={message.message} id={message.id}/>)


  return (
    <div className={style.messages__page}>
      <div className ={style.users__msg}>
        
    {ElementUserDialog}
            
      </div>
        
        <div className={style.dialogs}>
                {ElementMessageData}
        </div>
    </div>
  );
};
export default Messages;
