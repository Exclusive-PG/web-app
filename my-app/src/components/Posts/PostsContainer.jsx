import React from "react";
import {
  refreshPostActionCreator,
  addPostActionCreator,
} from "../../Redux/reducer-profile";
import Posts from "./Posts";

const PostsContainer = (props) => {
  
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let refreshContentPost = (contentPost) => {
    let action = refreshPostActionCreator(contentPost);
    props.store.dispatch(action);
  };

  return (
    <Posts
      addPost={addPost}
      refreshContentPost={refreshContentPost}
      post={state.PostsData}
      ContentNewPost = {state.ContentNewPost}
    />
  );
};

export default PostsContainer;

// ContentNewPost = {state.profilePage.ContentNewPost}
