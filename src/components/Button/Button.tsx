import { ButtonProps } from './Button.props';
import './Button.module.css';

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className='button accent' {...props}>{children}</button>
  );
}

export default Button;