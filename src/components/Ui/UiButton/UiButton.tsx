import {FC} from 'react';
import styles from './UiButton.module.scss';
import cn from 'classnames';

interface ButtonProps {
    text: string,
    onClick?: () => void;
    classes?: string;
}

const UiButton: FC<ButtonProps> = ({
    text, 
    onClick, 
    classes
}: any) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.btn, classes)}
        >
            {text}
        </button>
    )
}

export default UiButton;