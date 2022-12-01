import React from 'react';
import classes from './DriverForm.module.css';

const DriverForm = (props) => {
    return (
        <form className={classes.form}>
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
                    <option className={classes.selectOption} value='econom'>Econom</option>
                    <option className={classes.selectOption} value='comfort'>Comfort</option>
                    <option className={classes.selectOption} value='vip'>VIP</option>
                </select>
            </div>
            <div className={classes.inputBlock}>
                <label className={classes.fieldText}>Select Rating</label>
                <select onChange={e => props.onNewDataChange('rating', e.target.value)}>
                    <option className={classes.selectOption} value='1'>1</option>
                    <option className={classes.selectOption} value='2'>2</option>
                    <option className={classes.selectOption} value='3'>3</option>
                    <option className={classes.selectOption} value='4'>4</option>
                    <option className={classes.selectOption} value='5'>5</option>
                </select>
            </div>
            <button className={classes.btnSuccess} onClick={props.saveData}>Save</button>
        </form>
    );
};

export default DriverForm;