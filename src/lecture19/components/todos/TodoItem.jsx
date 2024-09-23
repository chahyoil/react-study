import styles from './TodoItem.module.css'
import CheckBox from '../CheckBox';

import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';

export default function TodoItem({todo, todos, setTodos}) {
    const [isEdit, setIsEdit] = useState(false);

    function handleDone() {
        // setTodos(todos.map((t) => {
        //     return t.id === todo.id ? { ...t, done: !t.done } : t
        // }))

        setTodos(prevTodos =>
            prevTodos.map(t => (
                t.id === todo.id ? { ...t, done: !t.done } : t
            ))
        );
    }

    function handleEditDone(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            setIsEdit(false);
        }
    }

    function handleEdit(e) {
        setTodos(prevTodos => (
            prevTodos.map(t =>
                t.id === todo.id ? { ...t, text: e.target.value } : t
            )
        ));
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
            <CheckBox onChange={handleDone} checked={todo.done}>
                {isEdit ? (
                    // 텍스트 입력 영역, 오토 사이즈 적용
                    <TextareaAutosize
                        className={styles.edit_input}
                        value={todo.text}
                        onChange={handleEdit}
                        onKeyUp={handleEditDone}>
                    </TextareaAutosize>
                ) : todo.text}
            </CheckBox>
            <button type='button' 
                    className={`${styles.edit_btn} ${isEdit ? styles.active : ''}`}
                    onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Save' : 'Edit'} </button>
            <button type='button' 
                    className={styles.remove_btn} 
                    onClick={handleRemove}>Remove</button>
        </li> 
    )
}