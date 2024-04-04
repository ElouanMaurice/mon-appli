import styles from '../styles/Page.module.css';


function Page() {
    return (
      <div className={styles.page}>
        <div className={styles.bloc}>
            <div className={styles.textpage}>
             <img className={styles.picturepage} src='phantom1.png'/>
                <div className={styles.enfin}>
                    <p className={styles.pagetext}>PHANTOM I White</p>
                    <p className={styles.pagetitre}>A class of its own.</p>
                    <button className={styles.containerbutton}>DISCOVER</button>
                </div>
            </div>
        </div>
        <div className={styles.bloc}>
            <div className={styles.textpage}>
             <img className={styles.picturepage} src='phantom2.png'/>
                <p className={styles.pagetext}>PHANTOM I White</p>
                <p className={styles.pagetitre}>A class of its own.</p>
                <button className={styles.containerbutton}>DISCOVER</button>
            </div>
        </div>
        <div className={styles.bloc}>
            <div className={styles.textpage}>
             <img className={styles.picturepage} src='phantom3.png'/>
                <p className={styles.pagetext}>PHANTOM I White</p>
                <p className={styles.pagetitre}>A class of its own.</p>
                <button className={styles.containerbutton}>DISCOVER</button>
            </div>
        </div>
        <div className={styles.bloc}>
            <div className={styles.textpage}>
             <img className={styles.picturepage} src='phantom4.png'/>
                <p className={styles.pagetext}>PHANTOM I White</p>
                <p className={styles.pagetitre}>A class of its own.</p>
                <button className={styles.containerbutton}>DISCOVER</button>
            </div>
        </div>
       
      
        
        
      </div>
    );
  }

export default Page;