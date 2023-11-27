import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Heading from '../../components/Headling/Heading';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import CardItem from '../../components/CardItem/CardItem';

function Cart() {
  const [cartProducts, setCardProducts] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);

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

  console.log(items);
  return <>
    <Heading>Корзина</Heading>

    {items.map(item => {
      const product = cartProducts.find(product => product.id === item.id);

      if (!product) {
        return;
      }

      return <CardItem count={item.count} {...product} />;
    })}
  </>;
}

export default Cart;
