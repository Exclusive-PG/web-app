import React from "react";
import style from "./css-components/main_css_style/App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile_page/Profile";
import Header from "./components/Headers/Header";
import Messages from "./components/Messages_page/Messages";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {

  return (
      <div className={style.wrapper__app}>
        <Header />
        <Navbar />

        <div className="Wrapper_data_user">
          <Route path="/messages" render={()=><Messages state={props.state.messagesPage} state={props.state.messagesPage}/>} />
          <Route path ="/profile" render={    ()=><Profile state={props.state.profilePage}/>   }/>
          <Route path="/news" render ={()=><News/>}/>
          <Route path="/music" render ={()=><Music/>}/>
          <Route path="/settings" render ={()=><Settings/>}/>
          <Route path="/friends" render ={()=><Friends state={props.state.friendsPage}/>}/>
        </div>
      </div>
  );
};

export default App;
