import styles from './TodoItem.module.css'
import CheckBox from '../CheckBox';

export default function TodoItem({todo, todos, setTodos}) {

    function handleDone() {
        // setTodos(todos.map((t) => {
        //     return t.id === todo.id ? { ...t, done: !t.done } : t
        // }))

        setTodos(prevTodos =>
            prevTodos.map(t =>
                t.id === todo.id ? { ...t, done: !t.done } : t
            )
        );
    }

    function handleRemove() {
        // setTodos(todos.filter((t) => {
        //     return t.id !== todo.id 
        // }));

        setTodos(prevTodos => (
            prevTodos.filter((t) => {
                return t.id !== todo.id;
            })
        ));
    }

    return (
        <li className={`${styles.todo_item} ${todo.done ? styles.active : ''}`}>
            <CheckBox onChange={handleDone} checked={todo.done}>{todo.text}</CheckBox>
            <button type='button' className={styles.remove_btn} onClick={handleRemove}>Remove</button>
        </li> 
    )
}
