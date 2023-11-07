import { useState } from "react";

export type Task = {
  description: string;
  completed: boolean;
}

function useTodo() {
  const [tasks] = useState<Array<Task>>([]);

  return {
    tasks,
  }
}

export default useTodo;
