import React from "react";
import Post from "./Post/Post";
import style from "./../Posts/Posts.module.css";

const Posts = (props) => {
debugger;
  let ElementPostsData = props.post.map(p => (
    <Post like={p.like} msg={p.message} />
  ));


  let newPost = React.createRef();
  ////Cделать для сообщения поле ввода+событие
  let OnAddPost = () => {
    let contentPost = newPost.current.value;
    if(contentPost !== "") props.addPost();
  }

  let OnRefreshContentPost = () => {
    let contentPost = newPost.current.value;
    props.refreshContentPost(contentPost);
 ////Dispatch refreshContent

  };


  return (
    <div className="posts-user">
      <div className={style.new__posts}>
        <div className="field__posts">
          <textarea
            placeholder="new post"
            onChange={OnRefreshContentPost}
            ref={newPost}
            value={props.ContentNewPost}
          ></textarea>
        </div>
        <div className={style.btn_add_post}>
          <span className={style.txt__btn_add_post} onClick={OnAddPost}>
            Add post
          </span>
        </div>
      </div>
      {ElementPostsData}
    </div>
  );
};

export default Posts;
