import React from 'react';
import styles from "./../Headers/Header.module.css";

const Header = () =>{
    return (
        <header className={styles.header}>
 <div className={styles.wrapper_header}> 
            <div className ={`${styles.figure1} ${styles.f}`}>
                <span className ={styles.letter}>E</span>
            </div>
                
            <div className = {`${styles.figure2} ${styles.f}`}>
                <span className ={styles.letter}>X</span>
            </div>
                
                <div className = {`${styles.figure3} ${styles.f}`}>
                <span className ={styles.letter}>C</span>
            </div>
                
                <div className = {`${styles.figure4} ${styles.f}`}>
                <span className ={styles.letter}>L</span>
            </div>
                
                <div className = {`${styles.figure5} ${styles.f}`}>
                <span className ={styles.letter}>U</span>
            </div>
                
            <div className = {`${styles.figure6} ${styles.f}`}>
                <span className ={styles.letter}>S</span>
            </div>
        <div className = {`${styles.figure7} ${styles.f}`}>
                <span className ={styles.letter}>I</span>
            </div>

            <div className = {`${styles.figure8} ${styles.f}`}>
                <span className ={styles.letter}>V</span>
            </div>

            <div className = {`${styles.figure9} ${styles.f}`}>
                <span className ={styles.letter}>E</span>
            </div>
            </div>           
            </header>
    );
}
export default Header;