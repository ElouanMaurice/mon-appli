import styles from '../styles/Dice.module.css';


function Dice(props) {
 return (
    
        <img className={styles.image} src= {`${props.number}.png`} alt= {props.number}/>
    
 )
}

export default Dice; 
