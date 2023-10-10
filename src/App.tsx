import { useState, MouseEvent } from 'react';
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
    </>
  );
}

export default App;
