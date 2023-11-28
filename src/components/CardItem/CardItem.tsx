import { useDispatch } from 'react-redux';
import { CardItemProps } from './CardItem.props';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import styles from './CardItem.module.css';

function CardItem(props: CardItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.remove(props.id));
  };

  const removeItem = () => {
    dispatch(cartActions.deleteItem(props.id));
  };

  return (
    <div className={styles['item']}>
      <div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
      <div className={styles['description']}>
        <div className={styles['name']}>{props.name}</div>
        <div className={styles['price']}>{props.price}&nbsp;₽</div>
      </div>
      <div className={styles['actions']}>
        <button className={styles['minus']} onClick={decrease}>
          <span>&#8722;</span>
        </button>
        <div className={styles['number']}>{props.count}</div>
        <button className={styles['plus']} onClick={increase}>
          <span>&#43;</span>
        </button>
        <button className={styles['delete']} onClick={removeItem}>
          <span>&#x2715;</span>
        </button>
      </div>
    </div>
  );
}

export default CardItem;