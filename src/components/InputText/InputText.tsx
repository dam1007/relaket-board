// inputText (text, number, password, email)
import * as styles from './InputText.css';

type InputTextProps = {
    type: string;
    name: string;
    id: string;
    label: string;
    placeholder: string;
};

export default function InputText({type, name, id, label, placeholder}: InputTextProps) {
    return (
        <>
            <label htmlFor={id} className={styles.inputLabel}>{label}</label>
            <input type={type} name={name} id={id} className={styles.input} placeholder={placeholder} />
        </>
    );
};