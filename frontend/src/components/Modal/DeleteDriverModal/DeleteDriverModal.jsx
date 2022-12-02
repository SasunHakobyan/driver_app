import React from 'react';
import Modal from "../Modal";
import classes from './DeleteDriverModal.module.css'

const DeleteDriverModal = (props) => {
    return (
        <Modal setModal={props.setModal}>
            <header>Do you want to delete Driver?</header>
            <div className={classes.modalButtons}>
                <button onClick={() => props.setModal({show:false, driverId:undefined})}>Cancel</button>
                <button className={classes.btnDanger} onClick={() => {
                    props.deleteDriver(props.modal.driverId);
                    props.setModal({show:false, driverId:undefined});
                }}>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteDriverModal;