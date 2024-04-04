import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Country';


import styles from '../styles/Home.module.css';


function Home() {

  // Insert your code here
  const [ countries, setCountries] = useState([])

  useEffect(() => {
    
    fetch(`https://countriesnow.space/api/v0.1/countries/flag/images`)
    .then(response => response.json())
    .then(data => [
      setCountries(data.data),

      console.log("yess", data.data)

  ])
}, []);

let coucoutries = countries.map((test, i) => {
 return <Country key={i} {...test} />
})


  return (
    <div className={styles.globalContainer}>
      <h1 className={styles.title}>My World Tour</h1>
      <span className={styles.counter}>Number of countries: {coucoutries.length} </span>
      <div className={styles.countriesContainer}>{coucoutries}
      </div>
    </div>
  );
}


export default Home;