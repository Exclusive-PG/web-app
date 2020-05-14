import React from 'react';
import style from  "./../Profile_page/profile-page.module.css";
import Posts from "./../Posts/Posts";
const Profile = () =>{

    return (
        <div className= {style.profile__page} >
            <div className ={style.wrapper__image__profile}>
            <div className={style.backGround__image }><img  src="https://image.freepik.com/free-vector/twitch_1361-2326.jpg" alt=""/> </div>
                <div className ={style.avatar__user}>
                <img className={style.avater__image_border} src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-User.png?14597416339728210630" alt=""/>
            </div>
            </div>
          
            <div className="data-user">data-user</div>
           <Posts/>
            
        </div>
    );

}
export default Profile;