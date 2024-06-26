import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], styles['accent'], className, {
      [styles['small']]: appearence === 'small',
      [styles['big']]: appearence === 'big',
      [styles['standard']]: appearence === 'standard',
      [styles['with-icon']]: appearence === 'with-icon'
    })}
      {...props}>
      {children}
    </button>
  );
}

export default Button;