import { useSelector } from 'react-redux';

function CounterDisplay() {
 const counter = useSelector((state) => state.counter.value);

 return (
   <h1>Counter : {counter.join(' - ')}</h1>
 );
}

export default CounterDisplay;