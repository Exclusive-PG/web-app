import ProfileReduce from "./reducer-profile";
import MessageReduce from "./reducer-messages";

const ADD_MESSAGE = "ADD-NEW-MESSAGE";
const REFRESH_CONTENT_MESSAGE = "REFRESH-CONTENT-MESSAGE";
const REFRESH_CONTENT_POST = "REFRESH-CONTENT-POST";
const ADD_NEW_POST = "ADD-NEW-POST";

let store = {
  _state: {
    profilePage: {
      PostsData: [
        { id: "1", message: "It's my first post", like: 10 },
        { id: "2", message: "Hi,I Dmitry", like: 1230 },
        { id: "3", message: "Welcome to my page", like: 2410 },
      ],
      ContentNewPost: "",
    },
    messagesPage: {
      Dialog: [
        { id: "1", name: "Dmitry" },
        { id: "2", name: "Ivan" },
        { id: "3", name: "Jack" },
        { id: "4", name: "Dmitry" },
        { id: "5", name: "Fred" },
        { id: "6", name: "Dmitry" },
        { id: "7", name: "Ivan" },
        { id: "8", name: "Jack" },
        { id: "9", name: "Dmitry" },
        { id: "10", name: "Fred" },
        { id: "11", name: "Dmitry" },
        { id: "12", name: "Ivan" },
        { id: "13", name: "Jack" },
        { id: "14", name: "Dmitry" },
        { id: "15", name: "Fred" },
      ],
      MessagesData: [
        { id: "1", message: "Hi" },
        { id: "2", message: "wassup" },
        { id: "3", message: "Good morning!" },
        { id: "4", message: "How are you?" },
        { id: "5", message: "hi,how's it going,dude?" },
        { id: "6", message: "Hi" },
        { id: "7", message: "wassup" },
        { id: "8", message: "Good morning!" },
        { id: "9", message: "How are you?" },
        { id: "10", message: "hi,how's it going,dude?" },
        { id: "11", message: "Hi" },
        { id: "12", message: "wassup" },
        { id: "13", message: "Good morning!" },
        { id: "14", message: "How are you?" },
        { id: "15", message: "hi,how's it going,dude?" },
        { id: "16", message: "Update 2.0" },
      ],
      newMessageContent: "",
    },
    friendsPage: {
      friendsData: [
        { id: 1, firstName: "Dmitry", lastName: "Ilchenko" },
        { id: 2, firstName: "Ivan", lastName: "Bondarenko" },
        { id: 3, firstName: "Jack", lastName: "Sparrow" },
        { id: 4, firstName: "Michael", lastName: "Jackson" },
        { id: 5, firstName: "Nick", lastName: "Brave" },
        { id: 6, firstName: "Danil", lastName: "White" },
        { id: 7, firstName: "Katya", lastName: "Tomphson" },
        { id: 8, firstName: "Lera", lastName: "Black" },
        { id: 9, firstName: "Dmitry", lastName: "Ilchenko" },
        { id: 10, firstName: "Ivan", lastName: "Bondarenko" },
        { id: 11, firstName: "Jack", lastName: "Sparrow" },
        { id: 12, firstName: "Michael", lastName: "Jackson" },
        { id: 13, firstName: "Nick", lastName: "Brave" },
        { id: 14, firstName: "Danil", lastName: "White" },
        { id: 15, firstName: "Katya", lastName: "Tomphson" },
        { id: 16, firstName: "Lera", lastName: "Black" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _refreshApp() {
    console.log("State here");
  },

  //// Observer app
  subscribe(observer) {
    this._refreshApp = observer;
  },
  /////Dispatch data
  dispatch(action) {
    //debugger;
    ////////reduce Profile 
    this._state.profilePage = ProfileReduce(this._state.profilePage,action);
    this._state.messagesPage = MessageReduce(this._state.messagesPage,action);
    this._refreshApp(this._state);
  },
};
window.store = store;
export default store;
