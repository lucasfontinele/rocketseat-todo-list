import { ComponentProps } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ComponentProps<'button'> {}

function Button({ ...props }: ButtonProps) {
  return (
    <button className={styles.buttonContainer} {...props} />
  )
}

export default Button;
