import { FC, InputHTMLAttributes,} from "react";
import classes from './FormInput.module.css'

type FormInputProps = InputHTMLAttributes<HTMLInputElement>
const FormInput: FC<FormInputProps> = ({...props}) => {
    return (
        <>
            <input {...props} className={classes.formInput}/>
        </>
    );
};

export default FormInput;