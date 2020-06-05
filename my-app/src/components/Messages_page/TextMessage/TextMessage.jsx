import React from "react";
import style from "./../TextMessage/TextMessage.module.css"
const TextMessage= (props) =>{
    return(
     <div className = {style.wrapper_messages}>
            <div className={style.img_user_msg}><img src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-User.png?14597416339728210630" alt=""/></div>
      <div className={style.dialog}><span className={style.message}>{props.textMsg}</span></div>

        </div> 
    );
  }
  
  export default TextMessage;