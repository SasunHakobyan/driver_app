import React from 'react';
import classes from "./EditForm.module.css";

const EditForm = (props) => {

    const formFields = props.fields.map(field => {
        return (
            <div className={classes.inputBlock}>
                Enter {field.fieldName}
                <input value={props.newFormData[field.fieldName]} onChange={e => props.onNewDataChange(field.fieldName, e.target.value)} type='text' />
            </div>
        );
    });

    let actionBtn = '';
    if (props.actionType === 'add') {
        actionBtn = <button onClick={props.saveData}>Add</button>;
    }

    return (
        <div>
            {formFields}
            {actionBtn}
        </div>
    );
};

export default EditForm;