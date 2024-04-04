import Dice from './Dice'
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

function Home() {

  const dicesData = [
    {dice: '1'},
    {dice: '2'},
    {dice: '3'},
    {dice: '4'},
    {dice: '5'},

  ];

  const dici = dicesData.map(data => {
    return <Dice number={data.dice}/>
  });


  return (
    <div className={styles.fond}>
       
      <div className={styles.triangle}>
     
        <div className={styles.trianglegauche}>
          <div className={styles.triangleA}></div>
          <div className={styles.triangleB}></div>
          <div className={styles.triangleC}></div>
      
        </div>
        <div className={styles.logo}>
          <img src='logo.png'/>
          <div className={styles.rond}>
            
             {dici}
            

          </div>

        </div>

        <div className={styles.triangledroit}>
          <div className={styles.triangleD}></div>
          <div className={styles.triangleE}></div>
          <div className={styles.triangleF}></div>
        </div>

      </div>
     
    </div>
    
  );
}

export default Home;
