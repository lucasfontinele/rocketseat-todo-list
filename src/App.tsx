import { useState } from "react";
import "./App.css";
import PlusIcon from "./assets/icons/Plus";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import useTodo from "./hooks/useTodo";

function App() {
  const { tasks, handleAddTask, handleRemoveTask } = useTodo();
  const [taskDescription, setTaskDescription] = useState('');

  const onSubmitTask = () => {
    handleAddTask(taskDescription);
    setTaskDescription('');
  };

  return (
    <main>
      <Header />

      <div className="formContainer">
        <Input
          placeholder="Adicione uma nova tarefa"
          onPressEnter={onSubmitTask}
          onChange={e => setTaskDescription(e.target.value)}
          value={taskDescription}
        />

        <Button type="button" onClick={onSubmitTask}>
          Criar

          <PlusIcon />
        </Button>
      </div>

      <Tasks tasks={tasks} onDeleteTask={handleRemoveTask} />
    </main>
  )
}

export default App
