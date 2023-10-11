import { useState, MouseEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
    setCounter(counter + 1);
  };

  return (
    <>
      {counter}
      <Button onClick={() => addCounter}>Button</Button>
      <Button onClick={() => addCounter} appearence={'big'}>Button</Button>
      <Input placeholder='Email'/>
      <div>
        <a href='/'>Menu</a>
        <a href='/cart'>Cart</a>
      </div>
      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
