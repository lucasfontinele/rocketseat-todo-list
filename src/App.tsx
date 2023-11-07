import "./App.css";
import PlusIcon from "./assets/icons/Plus";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import useTodo from "./hooks/useTodo";

function App() {
  const { tasks } = useTodo();

  return (
    <main>
      <Header />

      <form>
        <Input placeholder="Adicione uma nova tarefa" onPressEnter={() => {}} />

        <Button type="button">
          Criar

          <PlusIcon />
        </Button>
      </form>

      <Tasks tasks={tasks} />
    </main>
  )
}

export default App
