import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import { useSelector } from 'react-redux';
import Article from './Article';






function Bookmarks() {

 const bookmarks = useSelector((state) => state.bookmarks.value);

 const articlesBookmarks = bookmarks.map((data, i) => {
	 return <Article key={i} {...data} />;
   });

	

	return (
		<div>
			<Head>
				<title>Morning News - Bookmarks</title>
			</Head>
			<div className={styles.container}>
				<h2>Bookmarks</h2>
				<span>{articlesBookmarks}</span>
			</div>
		</div>

	);
}

export default Bookmarks;
