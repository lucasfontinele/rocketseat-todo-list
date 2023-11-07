import TrashIcon from "../../assets/icons/Trash";
import styles from "./styles.module.css";

type TaskItemProps = {
  id: number;
  title: string;
  checked: boolean;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

function TaskItem({ id, title, checked, onDeleteTask, onCompleteTask }: TaskItemProps) {
  return (
    <div className={styles.taskItemContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onCompleteTask(id)}
      />

      <p className={styles.taskDescription}>
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
