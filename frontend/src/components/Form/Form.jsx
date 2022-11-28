import React from 'react';
import classes from "./Form.module.css";

const Form = (props) => {

    const formFields = props.fields.map(field => {
        return (
            <div className={classes.inputBlock}>
                Enter {field.fieldName}
                <input value={props.formData[field.fieldName]} onChange={e => props.onNewDataChange(field.fieldName, e.target.value)} type='text' />
            </div>
        );
    });

    return (
        <div>
            {formFields}
            <button onClick={props.saveData}>Save</button>
        </div>
    );
};

export default Form;