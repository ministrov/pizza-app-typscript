// import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

// export const ButtonAlt: FC<ButtonProps> = ({ children, className, ...props }: ButtonProps) => {
//   return (
//     <button className={cn('button accent', className)} {...props}>{children}</button>
//   );
// }

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], styles['accent'], className, {
      [styles['small']]: appearence === 'small',
      [styles['big']]: appearence === 'big'
    })}
      {...props}>
      {children}
    </button>
  );
}

export default Button;