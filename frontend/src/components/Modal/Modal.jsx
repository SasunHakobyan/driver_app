import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div>
            <div onClick={() => props.setModal({show:false, driverId: undefined})} className={classes.modal}></div>
            <div className={classes.modalContent}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;