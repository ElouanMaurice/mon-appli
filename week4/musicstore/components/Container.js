import styles from '../styles/Container.module.css';


function Container() {
    return (
      <div className={styles.container}>
        <div className={styles.texto}>
            <p className={styles.conatinertext}>LATEST LAUNCH</p>
            <p className={styles.conatinertitre}>DIONE SOUNDBAR</p>
        </div>
        <img className={styles.containerpicture} src='soundbar.png'/>
        <button className={styles.containerbutton}>DISCOVER</button>
      </div>
    );
  }

export default Container;