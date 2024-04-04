import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [changer, setChanger] = useState(false);

  
  
 const handleSubmit = () => {
  if(email === "codybanks" && password === "qwerty123"){
    setChanger(true)
 };
 console.log("oui", changer)

 }

 console.log("allez", changer)
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

        <div>
          {!changer && <div>
            <h1>CIA LOGIN</h1>
            <div className={styles.inputContainer}>
              <span>AGENT ID</span>
              <input type="text" id="agentId" onChange={(codybanks) => setEmail(codybanks.target.value)} value={email}/>
            </div>

            <div className={styles.inputContainer}>
              <span>PASSWORD</span>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>

            <button id="login" onClick={() => handleSubmit()}>LOGIN</button>
            </div>}
        </div>
        <div>
          {changer && <div> Welcome, agent Cody Banks</div>}
        </div>
      
    </div>
  );
}

export default Home;
