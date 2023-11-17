import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

export function MenuList({ products }: MenuListProps) {

  const capitalizeFirsLowerCaseRest = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className={styles['wrapper']}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={capitalizeFirsLowerCaseRest(product.ingredients.join(', '))}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>

  );
}