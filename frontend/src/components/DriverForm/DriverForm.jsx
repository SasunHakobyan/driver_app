import React from 'react';
import classes from './DriverForm.module.css'

const DriverForm = (props) => {
    return (
        <div>
            <div className={classes.inputBlock}>
                Enter username
                <input value={props.newDriverData.username} onChange={e => props.onNewDataChange('username', e.target.value)} type='text' />
            </div>
            <div className={classes.inputBlock}>
                Enter password
                <input value={props.newDriverData.password} onChange={e => props.onNewDataChange('password', e.target.value)} type='text'/>
            </div>
            <div className={classes.inputBlock}>
                Enter tariff
                <input value={props.newDriverData.tariff} onChange={e => props.onNewDataChange('tariff', e.target.value)} type='text'/>
            </div>
            <div className={classes.inputBlock}>
                Enter rating
                <input value={props.newDriverData.rating} onChange={e => props.onNewDataChange('rating', e.target.value)} type='text'/>
            </div>
            <button onClick={props.addDriver}>Add</button>
        </div>
    );
};

export default DriverForm;