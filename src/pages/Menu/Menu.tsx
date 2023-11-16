import { useState, useEffect } from 'react';
import { PREFIX } from '../../helpers/API';
import Heading from '../../components/Headling/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { Product } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  
  useEffect(() => {
    const getMenu = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        if (e instanceof AxiosError) {
          setError(e.message);
        }
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
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products}/>}
        {isLoading && <>Loading products......</>}
      </div>
    </>
  );
}

export default Menu;