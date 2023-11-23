import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Headling/Heading';
import Input from '../../components/Input/Input';
import cn from 'classnames';
import { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';
import styles from '../Login/Login.module.css';

export type RegisterForm = {
  email: {
    value: string;
  },
  password: {
    value: string;
  }, 
  name: {
    value: string;
  }
};

function Register() {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(userActions.clearRegisterError());

    const target = event.target as typeof event.target & RegisterForm;
    const { email, password, name } = target;
    dispatch(register({ email: email.value, password: password.value, name: name.value }));
    const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,8}$/;

    if (email.value === '' && password.value === '' && name.value === '') {
      setIsValidEmail(false);
      setIsValidPassword(false);
      setIsValidName(false);
    }

    if (!email_pattern.test(email.value)) {
      setIsValidEmail(false);
    }

    if (!password_pattern.test(password.value)) {
      setIsValidPassword(false);
    }
  };

  // const sendLogin = async (email: string, password: string, name: string) => {
  //   dispatch(register({ email, password, name }));
  //   // try {
  //   //   const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
  //   //     email,
  //   //     password
  //   //   });

  //   //   // localStorage.setItem('jwt', data.access_token);
  //   //   dispatch(userActions.addJwt(data.access_token));
  //   //   navigate('/');
  //   // } catch (e) {
  //   //   if (e instanceof AxiosError) {
  //   //     setError(e.response?.data.message);
  //   //   }
  //   // }
  // };

  return (
    <div className={styles['login']}>
      <Heading>Регистрация</Heading>
      {registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
      <form className={styles['form']} onSubmit={submitHandler}>
        <div className={styles['field']}>
          <label className={cn({ [styles['invalid']]: !isValidEmail })}
            htmlFor='email'
          >
            Ваш email
          </label>
          <Input id='email' name='email' isValid={isValidEmail} placeholder='Email' />
        </div>

        <div className={styles['field']}>
          <label className={cn({ [styles['invalid']]: !isValidPassword })}
            htmlFor='password'
          >
            Ваш пароль
          </label>
          <Input id='password' name='password' isValid={isValidPassword} type='password' placeholder='Пароль' />
        </div>

        <div className={styles['field']}>
          <label className={cn({ [styles['invalid']]: !isValidName })}
            htmlFor='userName'
          >
            Ваше имя
          </label>
          <Input id='name' name='userName' isValid={isValidName} placeholder='Имя' />
        </div>

        <Button style={{ padding: 0 }} appearence='big'>Зарегистрироваться</Button>
      </form>
      <div className={styles['links']}>
        <div>Есть акканут?</div>
        <Link to={'/auth/login'}>Войти</Link>
      </div>
    </div>
  );
}

export default Register;