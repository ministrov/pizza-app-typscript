import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament } from '../../store/counter.slice';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increament())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decreament())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}