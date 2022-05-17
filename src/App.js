import { useState, useRef } from "react";

import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";
import { LottoNumberList } from "./components/LottoNumberList";

function App() {
  const MAX_LOTTO_DATA = 5;

  const [lottoData, setLottoData] = useState([]);

  const dataId = useRef(0);

  const onSelect = (isAutoSelect, selectedNumbers) => {
    if (lottoData.length === MAX_LOTTO_DATA) {
      return;
    }

    const newLotto = {
      isAutoSelect,
      selectedNumbers,
      id: dataId.current,
    };
    dataId.current += 1;
    setLottoData([...lottoData, newLotto]);
  };

  const onReset = () => {
    setLottoData([]);
    dataId.current = 0;
  };

  const onRemove = (targetId) => {
    const newLottoList = lottoData.filter((item) => item.id !== targetId);
    setLottoData(newLottoList);
  };

  return (
    <div className="App">
      <h1>React Lotto</h1>
      <div>
        <LottoNumberList onSelect={onSelect} />
      </div>
      <div>
        <SelectView
          numberSelectList={lottoData}
          onReset={onReset}
          onRemove={onRemove}
        />
        <AccountView />
      </div>
    </div>
  );
}

export default App;
