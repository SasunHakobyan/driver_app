import React from 'react';

import classes from './ClientForm.module.css';

const ClientForm = (props) => {
    return (
        <div>
            <div className={classes.inputBlock}>
                Enter username
                <input value={props.newClientData.username} onChange={(e) => props.onNewDataChange('username', e.target.value)} type='text' />
            </div>
            <div className={classes.inputBlock}>
                Enter card credentials
                <input value={props.newClientData.cardCredentials} onChange={e => props.onNewDataChange('cardCredentials', e.target.value)} type='text'/>
            </div>
            <div className={classes.inputBlock}>
                Enter password
                <input value={props.newClientData.password} onChange={e => props.onNewDataChange('password', e.target.value)} type='text'/>
            </div>
            <button onClick={props.addClient}>Add</button>
        </div>
    );
};

export default ClientForm;