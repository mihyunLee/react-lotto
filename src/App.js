import { useState, useRef } from "react";

import "./App.css";
import { AccountView } from "./components/AccountView";
import { SelectView } from "./components/SelectView";
import { LottoNumberList } from "./components/LottoNumberList";

import { ResultView } from "./components/ResultView";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

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
      <BrowserRouter>
        <div className="App">
          <div className="App">
            <LottoNumberList onSelect={onSelect} />
            <div className="Wrapper">
              <SelectView
                numberSelectList={lottoData}
                onReset={onReset}
                onRemove={onRemove}
              />
              <AccountView />
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;




          {/* <Switch> 라우터 사용 실패!!
          <Route exact path="/">
              <LottoNumberList onSelect={onSelect} />
                <div className="Wrapper">
                  <SelectView
                    numberSelectList={lottoData}
                    onReset={onReset}
                    onRemove={onRemove}
                  />
                  <AccountView />
                </div>
          </Route>
          <Route path="/result" componenet={ResultView} />
          <Route path="/">Not Found</Route>
          </Switch> */}
          {/* <ResultView /> */}


