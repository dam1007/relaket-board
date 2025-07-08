// inputText (text, number, password, email)
import * as styles from './InputText.css';
import { textRequired } from '@/styles/components.css';

type InputTextProps = {
    type: string;
    name: string;
    id: string;
    label: string;
    placeholder: string;
    required?: boolean;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({type, name, id, label, placeholder, required, defaultValue, onChange}: InputTextProps) {
    return (
        <>
            <label 
                htmlFor={id} 
                className={styles.inputLabel}>
                {label}{' '}
                {required ? <span className={textRequired}>*</span> : null}
            </label>
            <input 
                type={type} 
                name={name} 
                id={id} 
                className={styles.input} 
                placeholder={placeholder} 
                required={required} 
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </>
    );
};