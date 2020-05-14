import React from 'react';
import Post from './Post/Post';

const Posts = () =>{
    return (
        <div className ="posts-user">
        <div className="new posts">
           <div className ="field__posts"> <textarea name="" id="" cols="30" rows="10"></textarea> </div> 
                <div className="btn_add_btn"><span>Add post</span></div>
        </div>
        <Post/>
    </div>

    );
}

export default Posts;