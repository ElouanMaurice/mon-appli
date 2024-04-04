
import styles from '../styles/Movie.module.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

let stars = [];
for(let i = 0; i<10; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />);
}




function Movie () {
   
    return (
        <div>
            <img className={styles.poster} alt="Poster" src = "/poster.jpg"/>
            <h5 className={styles.name}>Le loup de Wall Street</h5>
            <p className={styles.description}></p>
            {stars}
            <p className={styles.vote}></p>  
        </div>
    )
}

export default Movie;