import React from 'react';
import style from  "./../Profile_page/profile-page.module.css";
import UserProfile from './DataUserProfile/UserProfile';
import PostsContainer from '../Posts/PostsContainer';




const Profile = (props) =>{
    return (
        <div className= {style.profile__page} >
               <UserProfile/>
           {/* <Posts post={props.state.PostsData}                   
                            ContentNewPost={props.state.ContentNewPost}     
                                dispatch={props.dispatch}
                                   /> */}
                                   
       <PostsContainer store = {props.store}/>
        </div>
    );

}
export default Profile;