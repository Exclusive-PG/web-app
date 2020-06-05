const ADD_MESSAGE = "ADD-NEW-MESSAGE";
const REFRESH_CONTENT_MESSAGE = "REFRESH-CONTENT-MESSAGE";


let startState = {
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
}

const MessageReduce = (state = startState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 0,
        message: state.newMessageContent,
      };
      state.MessagesData.push(newMessage);
      state.newMessageContent = "";
      return state;
    case REFRESH_CONTENT_MESSAGE:
      state.newMessageContent = action.contentMessage;
      return state;
    default:
      return state;
  }
};

///// Message actionCreator
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const refreshMessageActionCreator = (message) => ({
  type: REFRESH_CONTENT_MESSAGE,
  contentMessage: message,
});



export default MessageReduce;
