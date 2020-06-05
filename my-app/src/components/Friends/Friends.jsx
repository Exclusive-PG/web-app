import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let elementFriends = props.state.friendsData.map((name) => (
    <Friend firstName={name.firstName} lastName={name.lastName} id={name.id} />
  ));
  let counterFrieds = 0;
  props.state.friendsData.filter(() => {
    if (true) counterFrieds++;
  });

  return (
    <div className={style.friend__page}>
      <div className={style.infoFriend}>
        Your friends list ({counterFrieds}):
      </div>
      <div className={style.list_friend}>{elementFriends}</div>
    </div>
  );
};
export default Friends;
