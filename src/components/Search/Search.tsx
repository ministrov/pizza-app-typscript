import { forwardRef } from 'react';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
  return (
    <div className={styles['input-wrapper']}>
      <input {...props} ref={ref} className={cn([styles['input']], className, {
        [styles['invalid']]: !isValid
      })} />
      <img className={styles['search']} src="/search.svg" alt="Search icon" />
    </div>
  );
});

export default Search;