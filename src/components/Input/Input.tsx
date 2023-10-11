import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={cn([styles['input']], className, {
      [styles['invalid']]: !isValid
    })} />
  );
});

export default Input;