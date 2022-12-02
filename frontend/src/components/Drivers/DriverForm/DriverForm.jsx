import React from 'react';
import classes from './DriverForm.module.css';

const DriverForm = (props) => {
    return (
        <div className={classes.form}>
            <div className={classes.inputBlock}>
                <label className={classes.fieldText}>Enter username</label>
                <input
                    value={props.formData.username}
                    onChange={e => props.onNewDataChange('username', e.target.value)}
                    type='text' />
            </div>
            <div className={classes.inputBlock}>
                <label className={classes.fieldText}>Enter password</label>
                <input
                    value={props.formData.password}
                    onChange={e => props.onNewDataChange('password', e.target.value)}
                    type='password' />
            </div>
            <div className={classes.inputBlock}>
                <label className={classes.fieldText}>Select Tariff</label>
                <select onChange={e => props.onNewDataChange('tariff', e.target.value)}>
                    <option selected disabled>Select Tariff</option>
                    <option value='econom'>Econom</option>
                    <option value='comfort'>Comfort</option>
                    <option value='vip'>VIP</option>
                </select>
            </div>
            <div className={classes.inputBlock}>
                <label className={classes.fieldText}>Select Rating</label>
                <select onChange={e => props.onNewDataChange('rating', e.target.value)}>
                    <option selected disabled>Select Rating</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <button className={classes.btnSuccess} onClick={props.saveData}>Save</button>
        </div>
    );
};

export default DriverForm;