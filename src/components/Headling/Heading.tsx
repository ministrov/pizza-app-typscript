import { HeadingProps } from './Heading.props';
import cn from 'classnames';
import styles from './Heading.module.css';

function Heading({ children, className, ...props }: HeadingProps) {
  return <h1 className={cn(className, styles['heading'])} {...props}>
    {children}
  </h1>;
}

export default Heading;