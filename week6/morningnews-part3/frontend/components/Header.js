import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToStore } from '../reducers/user';
import { addLogoutToStore } from '../reducers/user';

function Header() {
	const [date, setDate] = useState('2050-11-22T23:59:59');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [ usernameSignup, setUsernameSignup] = useState('');
	const [ passwordSignup, setPasswordSignup] = useState('');
	const [ usernameSignin, setUsernameSignin] = useState('');
	const [ passwordSignin, setPasswordSignin] = useState('');
	
	const dispatch = useDispatch();

	const handleRegister = () => {
	
		
		let signup = {
			username: usernameSignup,
			password: passwordSignup,
		}
		fetch('http://localhost:3000/users/signup', {
			method:"POST",
			headers: {
				'Content-Type':'application/json; charset=utf-8'
			},
			body: JSON.stringify(signup)
		})
			.then(response =>response.json())
			.then(data => { 
				if( data.result === true){
					dispatch(addUserToStore(usernameSignup))
					setUsernameSignup('');
					setPasswordSignup('');
					setUsernameSignin('');
					setPasswordSignin('');

				}
				 
			})



	};

	const handleConnect = () => {
	

		let signin = {
			username: usernameSignin,
			password:passwordSignin,
		}

		fetch('http://localhost:3000/users/signin', {
			method:"POST",
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(signin)
		})
			.then(response =>response.json())
			.then(data => {	
				if( data.result === true){
					dispatch(addUserToStore(usernameSignin))
					setUsernameSignup('');
					setPasswordSignup('');
					setUsernameSignin('');
					setPasswordSignin('');
				}			

			})
	};

	useEffect(() => {
		setDate(new Date());
	}, []);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const modalContent = (
		<div className={styles.registerContainer}>
			<div className={styles.registerSection}>
				<p>Sign-up</p>
				<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUsernameSignup(e.target.value)} value={usernameSignup}/>
				<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setPasswordSignup(e.target.value)} value={passwordSignup}/>
				<button id="register"  onClick ={() => handleRegister()}>Register</button>
			</div>
			<div className={styles.registerSection}>
				<p>Sign-in</p>
				<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setUsernameSignin(e.target.value)} value={usernameSignin}/>
				<input type="password" placeholder="Password" id="signInPassword"  onChange={(e) => setPasswordSignin(e.target.value)} value={passwordSignin}/>
				<button id="connection" type="reset" value="Reset" onClick ={() => handleConnect()}>Connect</button>
				
			</div>
		</div>
	);


	let userSection;
	if (isModalVisible) {
		userSection = <FontAwesomeIcon icon={faXmark} onClick={() => showModal()} className={styles.userSection} />;
	} else {
		userSection = <FontAwesomeIcon icon={faUser} onClick={() => showModal()} className={styles.userSection} />;
	} 

	const user = useSelector((state) => state.user.value)

	if (user.isConnected){
		userSection = 
			<div>
				<span>Welcome {user.username} /</span>
				<button onClick={() => dispatch(addLogoutToStore())}>Logout</button>
			</div>
	} 


	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Moment className={styles.date} date={date} format="MMM Do YYYY" />
				<h1 className={styles.title}>Morning News</h1>
				{userSection}
			</div>

			<div className={styles.linkContainer}>
				<Link href="/"><span className={styles.link}>Articles</span></Link>
				<Link href="/bookmarks"><span className={styles.link}>Bookmarks</span></Link>
			</div>

			{isModalVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} open={isModalVisible} closable={false} footer={null}>
					{modalContent}
				</Modal>
			</div>}
		</header >
	);
}

export default Header;
