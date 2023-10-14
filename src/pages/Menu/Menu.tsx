import Heading from '../../components/Headling/Heading';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

function Menu() {
  return (
    <>
      <div className={styles['head']}>
        <Heading>
          Меню
        </Heading>
        <Search placeholder='Введите блюдо или состав' />
      </div>
      <div className={styles['list']}>
        <ProductCard
          id={1}
          title={'Наслаждение'}
          description={'Салями, руккола, помидоры, оливки'}
          image={'/product-demo.jpg'}
          price={300}
          rating={4.5}
        />
      </div>
    </>
  );
}

export default Menu;