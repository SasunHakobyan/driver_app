import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    const setDriversOnClick = () => {
        fetch("http://localhost:5500/getDrivers")
            .then(res => res.json())
            .then(res => {
                props.setDriver(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={classes.header}>
            <div className={classes.navItem}>
                <NavLink onClick={setDriversOnClick} className={classes.navLink} to='/drivers'>Drivers</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink className={classes.navLink} to='/users'>Users</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink className={classes.navLink} to='order'>Order</NavLink>
            </div>
        </div>
    );
};

export default NavBar;