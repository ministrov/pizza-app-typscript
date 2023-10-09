import { useState, MouseEvent } from 'react';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
    setCounter(counter + 1);
  }

  return (
    <>
      {counter}
      <Button onClick={() => addCounter}>Button</Button>
    </>
  )
}

export default App
