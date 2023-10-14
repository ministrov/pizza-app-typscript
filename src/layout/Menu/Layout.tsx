// import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

function Layout() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

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
          <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
            [styles.active]: isActive
          })}>
            <img src="/menu-icon.svg" alt="Menu icon" />
            Menu
          </NavLink>
          <NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
            [styles.active]: isActive
          })}>
            <img src="/cart-icon.svg" alt="Cart icon" />
            Cart
          </NavLink>
        </div>
        <Button className={styles['exit']}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Выход
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;