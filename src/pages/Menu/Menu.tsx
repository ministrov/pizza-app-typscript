import { useState, useEffect } from 'react';
import { PREFIX } from '../../helpers/API';
import Heading from '../../components/Headling/Heading';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { Product } from '../../interfaces/product.interface';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(`${PREFIX}/products`);

        if (!response.ok) {
          return;
        }

        const data = await response.json() as Product[];
        setProducts(data);
      } catch (e) {
        console.error(e);
      }

      console.log(products);
    };

    getMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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