import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

  let counterFrieds=0;
  let elementFriends = props.state.friendsData.map((name) =><Friend firstName={name.firstName} lastName={name.lastName} id={name.id} />);
  props.state.friendsData.map(()=> {counterFrieds++;});

  return (
    <div className={style.friend__page}>
      <div className={style.infoFriend}> Your friends list ({counterFrieds}):</div>
      <div className={style.list_friend}>{elementFriends}</div>
    </div>
  );
};
export default Friends;
