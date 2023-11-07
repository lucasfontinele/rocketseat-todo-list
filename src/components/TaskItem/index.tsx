import TrashIcon from "../../assets/icons/Trash";
import styles from "./styles.module.css";

type TaskItemProps = {
  title: string;
  checked: boolean;
  onDeleteTask: () => void;
}

function TaskItem({ title, checked }: TaskItemProps) {
  return (
    <div className={styles.taskItemContainer}>
      <input
        type="checkbox"
        defaultChecked={checked}
        checked={checked}
      />

      <p className={styles.taskDescription}>{title}</p>

      <button className={styles.deleteIconContainer} type="button">
        <TrashIcon />
      </button>
    </div>
  );
}

export default TaskItem;
