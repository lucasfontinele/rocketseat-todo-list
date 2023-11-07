import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Header />

      <form>
        <Input onPressEnter={() => {}} />
      </form>
    </main>
  )
}

export default App
