import React from 'react';
import classes from './DeleteClientModal.module.css'
import Modal from "../Modal";

const DeleteClientModal = (props) => {
    return (
        <Modal setModal={props.setModal}>
            <header>
                Do you want to delete client?
            </header>
            <div className={classes.modalButtons}>
                <button onClick={() => props.setModal({show:false, clientId:undefined})}>Cancel</button>
                <button className={classes.btnDanger} onClick={() => {
                    props.deleteClient(props.modal.clientId);
                    props.setModal({show:false, clientId:undefined});
                }}>Delete</button>
            </div>
        </Modal>
    );
};

export default DeleteClientModal;