import styles from '../styles/Home.module.css';

function Pokemon(props) {


    return (
        <>
            <div className={styles.pokemonElectric}>
                <div className={styles.imgContainer}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id  }.png`} alt={`${props.name}`} />
                </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.type}>Type: <span>{props.type}</span></span>
            </div>
            </div>
        </>


    );

}
export default Pokemon;
