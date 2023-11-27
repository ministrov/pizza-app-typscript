import { useSelector } from 'react-redux';
import Heading from '../../components/Headling/Heading';
import { RootState } from '../../store/store';
import CardItem from '../../components/CardItem/CardItem';

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);

  console.log(items);
  return (
    <div>
      <Heading>Корзина</Heading>

      {items.map(item => (<CardItem id={item.id} count={item.count} name={''} image={''} price={0}/>))}
    </div>
  );
}

export default Cart;