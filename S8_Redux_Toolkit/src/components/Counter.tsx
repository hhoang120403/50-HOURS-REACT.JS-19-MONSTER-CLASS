import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../state/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../state/counter/counterSlice';

const Counter = () => {
  // Read the data from the "store"
  const count = useSelector((state: RootState) => state.counter.value);
  // Changing the data by sending "actions" to the store.
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment by 10 with Async
        </button>
      </div>
    </div>
  );
};
export default Counter;
