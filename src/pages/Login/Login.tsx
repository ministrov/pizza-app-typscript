import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headling/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';

function Login() {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    
    console.log(event);
  };

  return (
    <div className={styles['login']} onSubmit={submitHandler}>
      <Heading>
        Вход
      </Heading>
      <form className={styles['form']}>
        <div className={styles['field']}>
          <label htmlFor='email'>Ваш email</label>
          <Input id='email' placeholder='Email'/>
        </div>

        <div className={styles['field']}>
          <label htmlFor='password'>Ваш пароль</label>
          <Input id='password' type='password' placeholder='Пароль'/>
        </div>

        <Button appearence='big'>Вход</Button>
      </form>
      <div className={styles['links']}>
        <div>Нет акканута?</div>
        <Link to={'/auth/register'}>Зарегистрироваться</Link>
      </div>
    </div>
  );
}

export default Login;