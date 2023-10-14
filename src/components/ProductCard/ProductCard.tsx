import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';

function ProductCard(props: ProductCardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['header']}>
        <img src={props.image} alt="" />
        <div className={styles['price']}>
          {props.price}
          <span className={styles['currency']}>₽</span>
        </div>
        <button className={styles['add-to-card']}>
          <img src="/cart-button-icon.svg" alt="Cart button icon" />
        </button>
        <div className={styles['rating']}>
          {props.rating}
          <img src="/star.svg" alt="Rating icon" />
        </div>
      </div>
      <div className={styles['footer']}>
        <div className={styles['title']}>{props.title}</div>
        <div className={styles['description']}>{props.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;