import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";
import LottoNumberList from "./components/LottoNumberItems/LottoNumberList";
import LottoNumberControl from "./components/LottoNumberControl/LottoNumberControl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectView />
        <AccountView />
      </header>
      <div>
        <LottoNumberList />
        <LottoNumberControl />
      </div>
    </div>
  );
}

export default App;
