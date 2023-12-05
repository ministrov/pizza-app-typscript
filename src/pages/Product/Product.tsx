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

        <Button className={styles['product-button']} appearence='small'>
          <img src="/cart-icon.svg" width={'16'} height={'17'} alt="Иконка корзины товара" />
          В корзину
        </Button>
      </header>

      <div className={styles['product-content']}>
        <div className={styles['prouct-imgage']}>
          <img src={data.image} width={''} height={''} alt="Изображение товара" />
        </div>
        <div className={styles['prouct-text']}>
          <div className={styles['price']}>
            
          </div>
          <div className={styles['rating']}>

          </div>
          <div className={styles['ingredients']}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;