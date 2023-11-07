import { useState } from "react";

export type Task = {
  id: number;
  description: string;
  completed: boolean;
}

function useTodo() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const handleAddTask = (description: string) => {
    setTasks(prev => [
      ...prev,
      {
        id: prev.length,
        description,
        completed: false
      },
    ]);
  }

  return {
    tasks,
    handleAddTask,
  }
}

export default useTodo;
