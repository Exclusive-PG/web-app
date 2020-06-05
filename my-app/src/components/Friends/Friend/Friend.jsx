import React from "react";
import style from "./Friend.module.css"
import { NavLink } from "react-router-dom";

const Friend = (props) => {

     let pathFriend = "/friends/"+ props.id;


let fullName = `${props.firstName}  ${props.lastName}` ;
  return (
  <div className={style.friend}>
    <div className={style.img_friend}><img src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-User.png?14597416339728210630" alt=""/></div>
     <div className={style.full__name}>
         <NavLink to={pathFriend}>{fullName}</NavLink>
        </div>
            
  </div>
  );
};
export default Friend;
