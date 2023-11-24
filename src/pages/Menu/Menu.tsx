import { useState, useEffect, ChangeEvent } from 'react';
import { PREFIX } from '../../helpers/API';
import Heading from '../../components/Headling/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import { Product } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';
import { Counter } from '../../components/Counter/Counter';

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const getMenu = async (name?: string) => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
          params: {
            name
          }
        });
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
    };

    getMenu(filter);
  }, [filter]);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles['head']}>
        <Heading>
          Меню
        </Heading>
        <Search onChange={updateFilter} placeholder='Введите блюдо или состав' />
      </div>
      <div className={styles['list']}>
        {error && <>{error}</>}
        {!isLoading && products.length > 0 && <MenuList products={products}/>}
        {isLoading && <>Loading products......</>}
        {!isLoading && products.length === 0 && <>Не найденно блюд по запросу</>}
      </div>

      <Counter/>
    </>
  );
}

export default Menu;