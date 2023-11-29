import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/Headling/Heading';
import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem/CardItem';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import styles from './Cart.module.css';

const DELIVERY_FEE = 169;

function Cart() {
  const [cartProducts, setCardProducts] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);
  const total = items.map(item => {
    const product = cartProducts.find(product => product.id === item.id);

    if (!product) {
      return 0;
    }

    return item.count * product.price;
  }).reduce((acc, item) => acc += item, 0);

  useEffect(() => {
    const getItems = async (id: number) => {
      const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);

      return data;
    };

    const loadAllItems = async () => {
      const result = await Promise.all(items.map(item => getItems(item.id)));

      setCardProducts(result);
    };

    loadAllItems();

  }, [items]);

  return <>
    <Heading className={styles['headling']}>Корзина</Heading>

    {items.map(item => {
      const product = cartProducts.find(product => product.id === item.id);

      if (!product) {
        return;
      }

      return <CardItem key={item.id} count={item.count} {...product} />;
    })}

    <div className={styles['promo-code']}>
      <input className={styles['promo-code-field']} type='text' placeholder='Промокод' />
      <Button appearence='small' children={'Применить'}/>
    </div>

    <div className={styles['ordering']}>
      <div className={styles['line']}>
        <div className={styles['text']}>Итог</div>
        <div className={styles['price']}>{total}&nbsp;<span>₽</span></div>
      </div>
      <hr className={styles['hr']}/>
      <div className={styles['line']}>
        <div className={styles['text']}>Доставка</div>
        <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
      </div>
      <hr className={styles['hr']} />
      <div className={styles['line']}>
        <div className={styles['text']}>Итог</div>
        <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span>₽</span></div>
      </div>
    </div>
  </>;
}

export default Cart;
