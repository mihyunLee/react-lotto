import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";
import { LottoNumberList } from "./components/LottoNumberList";
import { LottoNumberControl } from "./components/LottoNumberControl";

function App() {
  return (
    <div className="App">
      <div>
        <LottoNumberList />
        <LottoNumberControl />
      </div>
      <div>
        <SelectView />
        <AccountView />
      </div>
    </div>
  );
}

export default App;
