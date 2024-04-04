import styles from '../styles/Home.module.css';
import { useState } from 'react';



function Home() {

const [counter, setNbLike] = useState(0);

const handleClick = () => {
  setNbLike(counter + 1);



}
const gererClick = () => { 
  setNbLike(counter - 1);
  if(counter < 0){
  setNbLike(counter === 0);
  }
}



  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} id="decrementBtn" onClick={()=> gererClick()}>-</button>
        <span className={styles.counter} id="counter">{counter}</span>
        <button className={styles.incrementBtn} id="incrementBtn" onClick={()=> handleClick()}>+</button>
      </div>
    </div>
  );
}

export default Home;
