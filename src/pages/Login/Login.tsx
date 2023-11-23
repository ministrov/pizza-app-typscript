import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headling/Heading';
import Input from '../../components/Input/Input';
import cn from 'classnames';
import { AppDispatch, RootState } from '../../store/store';
import { login } from '../../store/user.slice';
import styles from './Login.module.css';

export type LoginForm = {
  email: {
    value: string
  }, 
  password: {
    value: string
  }
};

function Login() {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const jwt = useSelector((state: RootState) => state.user.jwt);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);
  
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
    const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,8}$/;
    
    if (email.value === '' && password.value === '') {
      setIsValidEmail(false);
      setIsValidPassword(false);
    }

    if (!email_pattern.test(email.value)) {
      setIsValidEmail(false);
    }

    if (!password_pattern.test(password.value)) {
      setIsValidPassword(false);
    }
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
    // try {
    //   const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
    //     email,
    //     password
    //   });
      
    //   // localStorage.setItem('jwt', data.access_token);
    //   dispatch(userActions.addJwt(data.access_token));
    //   navigate('/');
    // } catch (e) {
    //   if (e instanceof AxiosError) {
    //     setError(e.response?.data.message);
    //   }
    // }
  };

  return (
    <div className={styles['login']}>
      <Heading>Вход</Heading>
      {error && <div className={styles['error']}>Email and Password fields must be filled in</div>}
      <form className={styles['form']} onSubmit={submitHandler}>
        <div className={styles['field']}>
          <label className={cn({ [styles['invalid']]: !isValidEmail})} 
            htmlFor='email'
          >
            Ваш email
          </label>
          <Input id='email' name='email' isValid={isValidEmail} placeholder='Email'/>
        </div>

        <div className={styles['field']}>
          <label className={cn({ [styles['invalid']]: !isValidPassword })} 
            htmlFor='password'
          >
            Ваш пароль
          </label>
          <Input id='password' name='password' isValid={isValidPassword} type='password' placeholder='Пароль'/>
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