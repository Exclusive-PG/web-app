import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../MessageItem/MessageItem.module.css"

const MessageItem =(props)=>{
    let pathMsg = "/messages/"+props.id;
    return(
      <div className={style.user__msg}>
        <div className ={style.user_img}><img src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-User.png?14597416339728210630" alt=""/></div>
        <div className={style.user_name}> <NavLink to={pathMsg}>{props.name}</NavLink></div>
        </div>
    );
  }

  export default MessageItem;