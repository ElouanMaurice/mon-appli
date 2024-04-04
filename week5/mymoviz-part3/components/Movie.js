import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


import styles from '../styles/Movie.module.css';
import { useState } from 'react';




function Movie(props) {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { 'color': '#f1c40f' };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }


  const [personalNote, setPersonalNote] = useState(0);

  const handleClick = (starPosition) => {
    setPersonalNote(starPosition + 1);

  }
  const nota = [];

  for (let i = 0; i < 10; i++) {
    let stylenote = {};
    if (i < personalNote) {
      stylenote = { 'color': '#2196f3' };
    }
    nota.push(<FontAwesomeIcon className={styles.note} key={i} icon={faStar} style={stylenote} onClick={() => handleClick(i)} />);
  }



  const [watchCount, setWatchCount] = useState(0);
  const watcho = [];
  const gererClick = () => {
    setWatchCount(watchCount + 1);  
    console.log("clickboom")
  }
  if(watchCount) {
  watcho.push(<FontAwesomeIcon icon={faVideo} style={{color: "#e74c3c",}}  />)

  } else {
  watcho.push(<FontAwesomeIcon icon={faVideo} style={{color: "#000000",}} />)

  }



  const [like , setLike] = useState(false);
  const lovoClick = () => {
    setLike(!like) 
  }

  const herto = [];
  if (like) {
    herto.push(<FontAwesomeIcon icon={faHeart} style={{color: "#e74c3c",}}/>)
    console.log("rouge")

  } else {
    herto.push(<FontAwesomeIcon icon={faHeart} style={{color: "#000000",}} />)
    console.log("noire")
  } 



  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt={props.title} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span> <br/>
        <span>{nota} ({personalNote})</span> <br />
        <span className={styles.watch} onClick={() => gererClick()} >{watcho} ({watchCount})</span><br/>
        <span className={styles.like}  onClick={() => lovoClick()}>{herto}</span><br/>

      </div>
    </div>
  );
}

export default Movie;
