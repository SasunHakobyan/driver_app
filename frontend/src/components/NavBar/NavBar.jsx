import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.navItem}>
                <NavLink className={classes.navLink} to='/drivers'>Drivers</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink className={classes.navLink} to='/clients'>Clients</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink className={classes.navLink} to='order'>Order</NavLink>
            </div>
        </div>
    );
};

export default NavBar;