import { Link, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import Heading from '../../components/Headling/Heading';
import styles from './Product.module.css';
import Button from '../../components/Button/Button';

function Product() {

  // const { id } = useParams();
  const data = useLoaderData() as Product;

  console.log(data);

  return (
    <div className={styles['product']}>
      <header className={styles['product-header']}>
        <Link to={'/'} className={styles['link']}/>

        <Heading>{data.name}</Heading>

        <Button className={styles['product-button']} appearence='with-icon'>
          <img src="/cart-icon.svg" width={'16'} height={'17'} alt="Иконка корзины товара" />
          В корзину
        </Button>
      </header>

      <div className={styles['product-content']}>
        <div className={styles['product-image']}>
          <img src={data.image} width={'449'} height={'253'} alt="Изображение товара" />
        </div>
        <div className={styles['product-text']}>
          <div className={styles['price']}>
            <span className={styles['price-label']}>Цена</span>
            <span className={styles['price-value']}>{data.price} <small className={styles['ruble']}>₽</small></span>
          </div>
          <div className={styles['rating']}>
            <span className={styles['rating-label']}>Рейтинг</span>
            <div className={styles['rating-value']}>
              {data.rating}&nbsp;
              <img src="/star.svg" alt="Rating icon" />
            </div>
          </div>
          <div className={styles['ingredients']}>
            <span className={styles['ingredients-label']}>Состав:</span>

            <ul className={styles['ingredients-list']}>
              {data.ingredients.map((item, index) => (
                <li key={index + 1} className={'ingredients-item'}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;