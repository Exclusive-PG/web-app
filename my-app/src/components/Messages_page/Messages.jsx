import React from "react";
import style from "./Messages.module.css";
import TextMessage from "./TextMessage/TextMessage";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {
  let ElementUserDialog = props.userDialog.map((dialog) => (
    <MessageItem name={dialog.name} id={dialog.id} />
  ));

  let ElementMessageData = props.messages.map((message) => (
    <TextMessage textMsg={message.message} id={message.id} />
  ));

  ////Create link on textarea for use
  let refFieldMessage = React.createRef();

  let addMessage = () => {
    let value = refFieldMessage.current.value;
    if (value === null || value === "");
    else {
      props.addMessage(value);
    }
  };

  let refreshContentMessage = () => {
    let message = refFieldMessage.current.value;
    props.OnRefreshContentMessage(message);
    console.log(message);
  };
  ////////return  block message elements
  return (
    <div className={style.messages__page}>
      <div className={style.users__msg}>{ElementUserDialog}</div>

      <div className={style.dialogs}>
        <div className={style.element_message}>{ElementMessageData}</div>

        <div className={style.input_msg}>
          <textarea
            placeholder="new message"
            onChange={refreshContentMessage}
            value={props.newMessageContent}
            ref={refFieldMessage}
          ></textarea>
          <div className={style.btn_send_msg} onClick={addMessage}>
            Send
          </div>
        </div>
      </div>
    </div>
  );
};
export default Messages;
