import React from 'react';
import style from"./../Navbar/menu-navigation.module.css";

const Navbar = ()=>{
    return (
        <nav className={style.menu_nav}>
            <div><a href ="https://www.google.com.ua">Profile</a></div>
            <div><a href ="https://www.google.com.ua">News</a></div>
            <div><a href ="https://www.google.com.ua">Music</a></div>
            <div><a href ="https://www.google.com.ua">Messages</a></div> 
            <div><a href ="https://www.google.com.ua">Settings</a></div> 
        </nav> 

    );
}
export default Navbar;