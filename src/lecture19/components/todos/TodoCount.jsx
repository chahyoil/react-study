import styles from './TodoCount.module.css'

export default function TodoCount({todos}) {
  const completedCount = todos.filter((todo) => todo.done === true).length;

  return (
    <div className={styles.todo_count}>
      완료: {completedCount} / 할 일: {todos.length}
    </div>
  )
}
