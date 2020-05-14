import React from 'react';
import style from "./css-components/main_css_style/App.module.css";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile_page/Profile';
import Header from './components/Headers/Header';



const  App= ()=> {
  return (
    <div className={style.wrapper__app}>
       <Header/>
      <Navbar/> 
    <Profile/>
    </div>
  );
}


export default App;
