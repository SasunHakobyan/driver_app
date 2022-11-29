import React from 'react';
import classes from './DriverForm.module.css'

const DriverForm = (props) => {
    return (
        <div>
            <div className={classes.inputBlock}>
                <div className={classes.fieldText}>Enter username</div>
                <input
                    value={props.formData.username}
                    onChange={e => props.onNewDataChange('username', e.target.value)}
                    type='text' />
            </div>
            <div className={classes.inputBlock}>
                <div className={classes.fieldText}>Enter password</div>
                <input
                    value={props.formData.password}
                    onChange={e => props.onNewDataChange('password', e.target.value)}
                    type='password' />
            </div>
            <div className={classes.inputBlock}>
                <div className={classes.fieldText}>Enter Tariff</div>
                <input
                    value={props.formData.tariff}
                    onChange={e => props.onNewDataChange('tariff', e.target.value)}
                    type='text' />
            </div>
            <div className={classes.inputBlock}>
                <div className={classes.fieldText}>Select Rating</div>
                <select onChange={e => props.onNewDataChange('rating', e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option selected value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <button className={classes.btnSuccess} onClick={props.saveData}>Save</button>
        </div>
    );
};

export default DriverForm;