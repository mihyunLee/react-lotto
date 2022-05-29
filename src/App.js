import { useRef, useState } from "react";
import "./App.css";
import LottoList from "./components/LottoList";
import Selector from "./components/Selector";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onSubmit = (isAuto, selectedNumbers) => {
    if (data.length === 5) {
      return;
    }
    const newLotto = {
      isAuto,
      selectedNumbers,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newLotto]);
  };

  const onReset = () => {
    setData([]);
    dataId.current = 0;
  };

  const onRemove = (selected) => {
    const newLottoList = data.filter((item) => item.id !== selected);
    setData(newLottoList);
    dataId.current -= 1;
  };

  return (
    <div className="App">
      <Selector onSubmit={onSubmit} />
      <LottoList onRemove={onRemove} onReset={onReset} lottoList={data} />
    </div>
  );
};

export default App;
