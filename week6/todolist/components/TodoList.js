import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';





function TodoList(props) {

    return (
        <>
            <div className={styles.task}>
                <div className={styles.taskSection}>
                <input type="checkbox" className={styles.completeCheckbox} checked={props.done}/> 
                <p>{props.message}</p>
                <span className={styles.urgentBadge}>{props.urgent}</span>
                </div>
                <FontAwesomeIcon icon={faTrash} className={styles.delete} />
            </div>

        </>
    );
}

export default TodoList;
        


