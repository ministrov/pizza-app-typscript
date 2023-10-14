import Heading from '../../components/Headling/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.head}>
      <Heading>
        Меню
      </Heading>
      <Search placeholder='Введите блюдо или состав'/>
    </div>
  );
}

export default Menu;