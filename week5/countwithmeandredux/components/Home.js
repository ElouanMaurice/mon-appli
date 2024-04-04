import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useDispatch } from 'react-redux';
import { addMoinsToStore } from '../reducers/counter';
import { addPlusToStore } from '../reducers/counter';
import { useSelector } from ' react-redux';


import { useState } from 'react';


function Home() {

  const dispatch = useDispatch();

  let addCounterMoins = (newCounter) => {
    dispatch(addMoinsToStore(newCounter));
  }

  let addCounterPlus = (newCounter) => {
    dispatch(addPlusToStore(newCounter));
  };

  const counter = useSelector((state) => state.counter.value);

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={500} height={200} />

      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} id= "decrementBtn" onClick={() => addCounterMoins()}>-</button>
        <span className={styles.counter} >{counter}</span>
      <button className={styles.incrementBtn} id="incrementBtn" onClick={() => addCounterPlus()}>+</button>
      </div>
    </div>
  );
}

export default Home;
