import {FC, InputHTMLAttributes} from 'react';
import classes from './FormCheckbox.module.css'

interface FormCheckboxProps {
    labelId: string,
    children: React.ReactNode,
}

type FormCheckboxType = InputHTMLAttributes<HTMLInputElement> & FormCheckboxProps;

const FormCheckbox: FC<FormCheckboxType> = ({labelId, children, ...props}) => {
    return (
        <>
            <input {...props} id={labelId} className={classes.checkbox} type='checkbox'/>
            <label htmlFor={labelId} className={classes.checkboxLabel}>{children}</label>
        </>
    );
};

export default FormCheckbox;