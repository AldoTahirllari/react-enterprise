import logo from "./logo.svg";
import { Button } from "@react-enterprise/components";
import { useDisclosure, toCamelCase } from "@react-enterprise/utils";
import "./App.css";

function App() {
  const { isOpen } = useDisclosure();
  console.log(isOpen, "Open toggle");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {toCamelCase("une jam aldo")}
        </a>
      </header>
    </div>
  );
}

export default App;
