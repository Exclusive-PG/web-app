import React from "react";
import {
  refreshMessageActionCreator,
  addMessageActionCreator,
} from "../../Redux/reducer-messages";
import Messages from "./Messages";

const MessageContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let OnAddMessage = (ctxMessage) => {
    props.store.dispatch(addMessageActionCreator(ctxMessage));
  };

  let OnRefreshContentMessage = (ctxMessage) => {
    let action = refreshMessageActionCreator(ctxMessage);
    props.store.dispatch(action);
  };
  ////////return  block message elements
  return (
    <Messages
      addMessage={OnAddMessage}
      OnRefreshContentMessage={OnRefreshContentMessage}
      messages = {state.MessagesData} userDialog ={state.Dialog}
      newMessageContent = {state.newMessageContent}
    />
  );
};
export default MessageContainer;
