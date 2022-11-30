import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div>
            <div className={classes.modal}></div>
            <div className={classes.modalContent}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;