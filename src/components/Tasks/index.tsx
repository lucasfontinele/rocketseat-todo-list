import { Task } from "../../hooks/useTodo";
import clipboardImg from "../../assets/images/Clipboard.png";
import styles from "./styles.module.css";

type TasksProps = {
  tasks: Array<Task>;
}

function Tasks({ tasks }: TasksProps) {
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

    return null;
  }

  return (
    <div className={styles.tasksContainer}>
      <header className={styles.tasksHeaderContainer}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      <div className={styles.tasksItemsContainer}>
        {renderTasks()}
      </div>
    </div>
  );
}

export default Tasks;
