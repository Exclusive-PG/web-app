const REFRESH_CONTENT_POST = "REFRESH-CONTENT-POST";
const ADD_NEW_POST = "ADD-NEW-POST";


let startState ={
  PostsData: [
    { id: "1", message: "It's my first post", like: 10 },
    { id: "2", message: "Hi,I Dmitry", like: 1230 },
    { id: "3", message: "Welcome to my page", like: 2410 },
  ],
  ContentNewPost: "",
};


const ProfileReduce = (state = startState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
        let newPost = {
            id: "17",
            message: state.ContentNewPost,
            like: 0,
          };
         state.PostsData.push(newPost); 
        state.ContentNewPost = "";
      return state;

    case REFRESH_CONTENT_POST:
      state.ContentNewPost = action.contentPost;
      return state;
    default :
    return state;
  }
};
  //// Post actionCreator
  export const refreshPostActionCreator = (txtPost) => ({
    type: REFRESH_CONTENT_POST,
    contentPost: txtPost,
  });
  
  export const addPostActionCreator = () => ({type : ADD_NEW_POST});


export default ProfileReduce;