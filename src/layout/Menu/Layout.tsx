import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.png" alt="User avatar icon" />
          <div className={styles['name']}>
            Антон Жилин
          </div>
          <div className={styles['email']}>
            antonZhilin@mail.ru
          </div>
        </div>
        <div className={styles['menu']}>
          <Link to='/' className={cn(styles['link'], {
            [styles.active]: location.pathname === '/'
          })}>
            <img src="/menu-icon.svg" alt="Menu icon" />
            Menu
          </Link>
          <Link to='/cart' className={cn(styles['link'], {
            [styles.active]: location.pathname === '/cart'
          })}>
            <img src="/cart-icon.svg" alt="Cart icon" />
            Cart
          </Link>
        </div>
        <Button className={styles['exit']}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Выход
        </Button>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;