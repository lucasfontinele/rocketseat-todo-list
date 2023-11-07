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

  const handleRemoveTask = (id: number) => {
    const prevTasks = tasks;
    const foundTask = prevTasks.findIndex(t => t.id === id);

    if (foundTask <= -1) return;

    prevTasks.splice(foundTask, 1);

    setTasks(prevTasks);
  };

  return {
    tasks,
    handleAddTask,
    handleRemoveTask,
  }
}

export default useTodo;
