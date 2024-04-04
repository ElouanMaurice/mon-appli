import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Home.module.css';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addListToStore } from '../reducers/list';


function Home() {

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.list.value );

  const [ text, setText ] = useState('');
  const [ checkBox, setCheckBox ] = useState(false);

  const handleText = () =>  {
    dispatch(addListToStore({
      message: text,
      urgent: checkBox,
      done: false
    }));
  }

  console.log("todo", todoList)  

  const texto = text.map((data, i) => {
  //  const isTexto = todoList.some(description => description.message === data.message) 
    return <TodoList key={i} message={data.message} urgent={data.checkBox} done={data.done}/>;
    
  });


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.addContainer}>
          <input type="text" placeholder="Task" id="taskName" className={styles.addTask} onChange={(e) => setText(e.target.value)} value={text} />
          <div className={styles.urgentSection}>
            <input type="checkbox" id="urgent" className={styles.urgentCheckbox} onChange={(e) => setCheckBox(e.target.checked)} checked={checkBox}/>
            <span className={styles.urgent}>URGENT</span>
          </div>
          <button onClick ={() => handleText()} id="add" className={styles.button}>ADD TASK</button>
        </div>
        <div className={styles.tasksContainer}>
          {texto}
        </div>
      </div>
    </div>
  );
}

export default Home;
