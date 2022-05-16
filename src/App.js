import { useState, useRef } from "react";

import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";
import { LottoNumberList } from "./components/LottoNumberList";

function App() {
  const [lottoData, setLottoData] = useState([]);

  const dataId = useRef(0);

  const onSelect = (isAutoSelect, selectedNumbers) => {
    const newLotto = {
      isAutoSelect,
      selectedNumbers,
      id: dataId.current,
    };
    dataId.current += 1;
    setLottoData([...lottoData, newLotto]);
  };

  return (
    <div className="App">
      <h1>React Lotto</h1>
      <div>
        <LottoNumberList onSelect={onSelect} />
      </div>
      <div>
        <SelectView numberSelectList={lottoData} />
        <AccountView />
      </div>
    </div>
  );
}

export default App;
