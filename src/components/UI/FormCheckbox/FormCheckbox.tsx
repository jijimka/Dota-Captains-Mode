import {FC, InputHTMLAttributes} from 'react';
import classes from './FormCheckbox.module.css'
interface FormCheckboxProps {
    labelName: string,
    labelId:string,
}

type FormCheckboxType = InputHTMLAttributes<HTMLInputElement> & FormCheckboxProps;

const FormCheckbox:FC<FormCheckboxType> = ({labelName,labelId,...props}) => {
    return (
        <>
            <input {...props} id={labelId} className={classes.checkbox} type='checkbox'/>
            <label htmlFor={labelId} className={classes.checkboxLabel}>{labelName}</label>
        </>
    );
};

export default FormCheckbox;