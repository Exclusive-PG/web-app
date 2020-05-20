import React from 'react';
import style from "./../Post/Post.module.css"

const Post=(props)=>{
    return (
    <div className={style.wrapper__post}>  
        
        <div className={style.avatar__inner}> 
        <img className={style.avatar__post}src="https://cdn.shopify.com/s/files/1/0099/9562/files/Header-Icon-User.png?14597416339728210630" alt=""/>
        </div>
        <div className={style.text__post}>{props.msg} </div>
    <div className={style.Count__Like}>Like {props.like}</div>
    </div>
        
       
    );
}
export default Post;