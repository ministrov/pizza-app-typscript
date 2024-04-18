import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

function Success() {
  const navigate = useNavigate();

  return (
    <div className={styles['success']}>
      <img src="/pizza.png" width="330" height="330" alt="Изображение пиццы" />
      <p className={styles['success-text']}>Ваш заказ успешно оформлен!</p>
      <Button appearence='standard' onClick={() => navigate('/')}>Сделать новый</Button>
    </div>
  );
}

export default Success;