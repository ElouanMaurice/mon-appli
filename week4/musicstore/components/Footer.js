import styles from '../styles/Footer.module.css';


function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.textfooter}>
            <p>ABOUT</p>
            <p>CONTACT</p>
            <p>SUPPORT</p>
            <p>STORES</p>
        </div>
      </div>
    );
  }

export default Footer;