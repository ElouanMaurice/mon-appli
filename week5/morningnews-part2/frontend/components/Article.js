import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBookmarksToStore } from '../reducers/bookmarks';




function Article(props) {

	const dispatch = useDispatch();

	const addBookmarks = (newBookmark) => {
	  dispatch(addBookmarksToStore(newBookmark));
	  
	};


	return (
		<div className={styles.articles}>
			<div className={styles.articleHeader}>
				<h3>{props.title}</h3>
			<FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} onClick={() =>addBookmarks(props)}></FontAwesomeIcon>

			</div>
			<h4 style={{ textAlign: "right" }}>- {props.author}</h4>
			<div className={styles.divider}></div>
			<Image src={props.urlToImage} alt={props.title} width={600} height={314} />
			<p>{props.description}</p>
		</div>
	);
}

export default Article;
