import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headling/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';

export type LoginForm = {
  email: {
    value: string
  }, 
  password: {
    value: string
  }
};

function Login() {
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
    
    
    console.log(event);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password
      });

      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
      }
    }
  };

  return (
    <div className={styles['login']}>
      <Heading>Вход</Heading>
      <form className={styles['form']} onSubmit={submitHandler}>
        <div className={styles['field']}>
          <label htmlFor='email'>Ваш email</label>
          <Input id='email' name='email' placeholder='Email'/>
        </div>

        <div className={styles['field']}>
          <label htmlFor='password'>Ваш пароль</label>
          <Input id='password' name='password' type='password' placeholder='Пароль'/>
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