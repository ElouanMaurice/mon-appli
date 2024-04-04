
import 'antd/dist/antd.css';
import Movie from './Movie';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';
const content = (
  <div>
    <p>Movie 1</p>
    <p>Movie 2</p>
  </div>
)
let poster = [];
for(let i = 0; i<10; i++) {
  poster.push(<Movie/>);
}

function Home() {
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.logo} alt = "Logo" src = "/logo.png"/>
        <img className={styles.letter} alt = "Letter logo" src= "/logoletter.png"/>
        <Popover content={content} title="Title">
          <Button type="button">♥ 4 movie(s)</Button>
        </Popover>
      </div>
      <h1 className={styles.titlelast}>Last releases</h1>
      <div className={styles.film}>{poster}</div>
    
    </div>
  );
}

export default Home;

