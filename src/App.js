import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectView />
        <AccountView />
      </header>
    </div>
  );
}

export default App;
