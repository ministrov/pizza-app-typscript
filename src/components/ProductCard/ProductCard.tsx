import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

function ProductCard(props: ProductCardProps) {
  return (

    <Link to={`/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['header']} style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles['price']}>
            {props.price}&nbsp;
            <span className={styles['currency']}>₽</span>
          </div>
          <button className={styles['add-to-card']}>
            <img src="/cart-button-icon.svg" alt="Cart button icon" />
          </button>
          <div className={styles['rating']}>
            {props.rating}&nbsp;
            <img src="/star.svg" alt="Rating icon" />
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['title']}>{props.title}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;