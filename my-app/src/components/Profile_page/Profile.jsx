import React from 'react';
import style from  "./../Profile_page/profile-page.module.css";
import Posts from "./../Posts/Posts";
import UserProfile from './DataUserProfile/UserProfile';




const Profile = (props) =>{


    return (
        <div className= {style.profile__page} >
               <UserProfile/>
           <Posts post={props.state.PostsData}/>
            
        </div>
    );

}
export default Profile;