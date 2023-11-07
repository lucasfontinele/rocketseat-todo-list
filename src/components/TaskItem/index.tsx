import clsx from "clsx";
import TrashIcon from "../../assets/icons/Trash";
import styles from "./styles.module.css";

type TaskItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

function TaskItem({ id, title, completed, onDeleteTask, onCompleteTask }: TaskItemProps) {
  const completedTaskDescription = completed ? styles.taskDescriptionCompleted : {};

  return (
    <div className={styles.taskItemContainer}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onCompleteTask(id)}
        className={styles.checkbox}
      />

      <p className={clsx(styles.taskDescription, completedTaskDescription)}>
        {title}
      </p>

      <button
        className={styles.deleteIconContainer}
        type="button"
        onClick={() => onDeleteTask(id)}
      >
        <TrashIcon />
      </button>
    </div>
  );
}

export default TaskItem;
