import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img src="/avatar.png" alt="User avatar icon" />
          <div className={styles['name']}>
            Антон Жилин
          </div>
          <div className={styles['email']}>
            antonZhilin@mail.ru
          </div>
        </div>
        <div className={styles['menu']}>
          <Link to='/' className={styles['link']}>
            <img src="/menu-icon.svg" alt="Menu icon" />
            Menu
          </Link>
          <Link to='/cart' className={styles['link']}>
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