import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headling/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';

export type LoginForm = {
  email: {
    value: string
  }, 
  password: {
    value: string
  }
};

function Login() {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
    checkInputValidation(isValid);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password
      });
      
      localStorage.setItem('jwt', data.access_token);
      navigate('/');
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  const checkInputValidation = (flag: boolean) => {
    console.log(flag);
    setIsValid(false);
  };

  return (
    <div className={styles['login']}>
      <Heading>Вход</Heading>
      {error && <div className={styles['error']}>{error}</div>}
      <form className={styles['form']} onSubmit={submitHandler}>
        <div className={styles['field']}>
          <label htmlFor='email'>Ваш email</label>
          <Input id='email' name='email' isValid={isValid} placeholder='Email'/>
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