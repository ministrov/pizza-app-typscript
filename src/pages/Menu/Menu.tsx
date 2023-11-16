import { useState, useEffect } from 'react';
import { PREFIX } from '../../helpers/API';
import Heading from '../../components/Headling/Heading';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const getMenu = async () => {
      try {
        setIsLoading(true);
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
            console.log('resolve');
          }, 2000);
        });
        const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
        return;
      }
      // try {
      //   const response = await fetch(`${PREFIX}/products`);

      //   if (!response.ok) {
      //     return;
      //   }

      //   const data = await response.json() as Product[];
      //   setProducts(data);
      // } catch (e) {
      //   console.error(e);
      // }
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
        {!isLoading && products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.ingredients.join(', ')}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
        {isLoading && <>Loading products......</>}
      </div>
    </>
  );
}

export default Menu;