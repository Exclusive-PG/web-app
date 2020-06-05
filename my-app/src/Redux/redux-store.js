import { createStore, combineReducers } from "redux";
import ProfileReduce from "./reducer-profile";
import MessageReduce from "./reducer-messages";
import friendReduce from "./reducer-friend";

let reducesPages = combineReducers({
    profilePage: ProfileReduce,
    messagesPage: MessageReduce,
    friendsPage : friendReduce
});

let store = createStore(reducesPages);


export default store;