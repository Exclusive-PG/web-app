import React from 'react';
import Post from './Post/Post';
import style from './../Posts/Posts.module.css'

const Posts = (props) =>{

let newPost = React.createRef();
////Cделать для сообщения поле ввода+событие 
let addPost=()=>{
    let valuePost = newPost.current.value;
        if(valuePost === null || valuePost=== ""){
            alert("Вы ничего не ввели");  
        }else{
            alert(valuePost);
        }

}


    let ElementPostsData = props.post.map(p => <Post like={p.like} msg={p.message}/>); 
    return (
        <div className ="posts-user">
        <div className={style.new__posts}>
           <div className ="field__posts"> <textarea name="" id="" cols="" rows="" ref={newPost}></textarea> </div> 
                <div className={style.btn_add_post}><span className={style.txt__btn_add_post} onClick={addPost}>Add post</span></div>
        </div>
                {ElementPostsData}
    </div>

    );
}

export default Posts;