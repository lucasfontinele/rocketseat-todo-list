import "./App.css";
import PlusIcon from "./assets/icons/Plus";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Header />

      <form>
        <Input onPressEnter={() => {}} />

        <Button type="button">
          Criar

          <PlusIcon />
        </Button>
      </form>
    </main>
  )
}

export default App
