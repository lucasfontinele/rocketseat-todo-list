import { ComponentProps } from "react";
import styles from "./styles.module.css";

interface InputProps extends ComponentProps<'input'> {
  onPressEnter: () => void;
}

function Input({ onPressEnter, ...props }: InputProps) {
  const onKeyDown = (keyCode: string | undefined) => {
    if (!keyCode) return;

    if (keyCode === 'Enter') {
      onPressEnter();
    }
  }; 

  return (
    <input
      className={styles.inputContainer}
      onKeyDown={(e) => onKeyDown(e.code)}
      {...props}
    />
  );
}

export default Input;
