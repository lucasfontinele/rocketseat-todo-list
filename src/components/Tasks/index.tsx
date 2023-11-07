import { Task } from "../../hooks/useTodo";
import clipboardImg from "../../assets/images/Clipboard.png";
import styles from "./styles.module.css";
import TaskItem from "../TaskItem";

type TasksProps = {
  tasks: Array<Task>;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  const completedTasks = tasks.filter(t => !!t.completed);


  const renderTasks = () => {
    if (tasks.length <= 0) {
      return (
        <div className={styles.emptyTasksContainer}>
          <img title="clipboard" alt="clipboard" src={clipboardImg} />

          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>

            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      );
    }

    return (
      <>
        {tasks.sort((a, b) => (a === b) ? 0 : a ? -1 : 1).map(t => (
          <TaskItem
            key={t.id}
            id={t.id}
            title={t.description}
            completed={t.completed}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
          />
        ))}
      </>  
    );
  }

  return (
    <div className={styles.tasksContainer}>
      <header className={styles.tasksHeaderContainer}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div>
          <strong>Concluídas</strong>
          <span>{completedTasks.length}</span>
        </div>
      </header>

      <div className={styles.tasksItemsContainer}>
        {renderTasks()}
      </div>
    </div>
  );
}

export default Tasks;
