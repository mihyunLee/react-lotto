import "./App.css";
import { AccountView } from "./components/AccountView";
import { ResetBox } from "./components/Resetbox";
import { TicketList } from "./components/TicketList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResetBox />
        <TicketList />
      </header>
      <AccountView />
    </div>
  );
}

export default App;
