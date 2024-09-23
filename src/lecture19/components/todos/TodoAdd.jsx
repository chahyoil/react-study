import {useState, useRef} from 'react';

import styles from './TodoAdd.module.css'

export default function TodoAdd({todos, setTodos, idRef}) {
    const [txt, setTxt] = useState('');
    const txtFocus = useRef(null);

    function handleAdd() {
        if(txt && txt.trim()) {
            setTodos([...todos, {id:idRef.current++, text : txt, done : false}]);
            setTxt('');
            txtFocus.current.focus();
        }
    }

    function handleEnter(e) {
        if(e.key === 'Enter') {
            handleAdd();
        }
    }

    return (
        <div className={styles.todo_add}>
            <input  
                    value={txt}
                    ref={txtFocus}
                    onChange={(e) => setTxt(e.target.value)}
                    onKeyUp={handleEnter}
                    type="text" 
                    placeholder='할 일을 입력하세요.'
                    title='할 일을 입력하세요'/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}
