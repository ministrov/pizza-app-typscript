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
        <div className={styles['currency']}>{props.price}&nbsp;₽</div>
      </div>
      <div className={styles['actions']}>
        <button className={styles['button']} onClick={decrease}>
          <img src="/cart-button-icon.svg" alt="Удалить из корзины" />
        </button>
        {props.count}
        <button className={styles['button']} onClick={increase}>
          <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
        </button>
        <button className={styles['remove']} onClick={removeItem}>
          <img src="/cart-button-icon.svg" alt="Удалить все" />
        </button>
      </div>
      <div className={styles['rating']}>
        {/* {props.rating}&nbsp; */}
        <img src="/star.svg" alt="Rating icon" />
      </div>
    </div>
  );
}

export default CardItem;