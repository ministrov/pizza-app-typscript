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
  
  };

  const removeItem = () => {

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
          <img src="/minus-icon.png" alt="Уменьшение значения" />
        </button>
        {props.count}
        <button className={styles['plus']} onClick={increase}>
          <img src="/plus-icon.png" alt="Увеличение значения" />
        </button>
        <button className={styles['delete']} onClick={removeItem}>
          <img src="/delete-icon.png" alt="Удаление из корзины" />
        </button>
      </div>
    </div>
  );
}

export default CardItem;