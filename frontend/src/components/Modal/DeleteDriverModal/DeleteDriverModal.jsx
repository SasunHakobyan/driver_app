import React from 'react';
import classes from './DeleteDriverModal.module.css'
import Modal from "../Modal";

const DeleteDriverModal = (props) => {
    return (
        <Modal>
            <h3 className={classes.modalTitle}>Do you want to delete driver</h3>
            <div className={classes.modalButtons}>
                <button onClick={() => props.setModal({show:false, driverId:undefined})}>Cancel</button>
                <button onClick={() => {
                    props.deleteDriver(props.modal.driverId);
                    props.setModal({show:false, driverId:undefined});
                }}>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteDriverModal;