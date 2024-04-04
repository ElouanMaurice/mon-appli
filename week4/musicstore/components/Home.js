import styles from '../styles/Home.module.css';
import Container from './Container';
import Page from './Page';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
    <div>
        <div className={styles.header}>
          <div className={styles.headerhaut}>
            <div className={styles.headergauche}>
               <p><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></p>
            </div>
            <h1 className={styles.titre}>MUSIC STORE</h1>
            <div className={styles.headerdroit}>
              <p><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></p>
              <p><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /></p>
              <p><FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff",}} /></p>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footergauche}>
                <div className={styles.petit}>PHANTOM</div>
                <div className={styles.grosseur}>IMPLOSIVE SOUND</div>
            </div>
            <div className={styles.footerdroit}>
              <button className={styles.discover}>DISCOVER</button>
              <button className={styles.buy}>BUY</button>
            </div>
          </div>

        </div>
        <div>
        <Container />
        <Page />
        <Footer />

        </div>

    </div> 
  )
}

export default Home;
