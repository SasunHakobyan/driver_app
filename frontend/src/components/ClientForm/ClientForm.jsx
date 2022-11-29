import React from 'react';
import classes from "../Form/Form.module.css";

const ClientForm = (props) => {
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
                <div className={classes.fieldText}>Enter Card Credentials</div>
                <input
                    value={props.formData.cardCredentials}
                    onChange={e => props.onNewDataChange('cardCredentials', e.target.value)}
                    type='text' />
            </div>
            <button className={classes.btnSuccess} onClick={props.saveData}>Save</button>
        </div>
    );
};

export default ClientForm;