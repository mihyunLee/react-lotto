import { useRef, useState } from "react";
import "./App.css";
import LottoList from "./components/LottoList";
import Selector from "./components/Selector";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onSubmit = (isAuto, selectedNumbers) => {
    const newLotto = {
      isAuto,
      selectedNumbers,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newLotto]);
  };

  return (
    <div className="App">
      <Selector onSubmit={onSubmit} />
      <LottoList lottoList={data} />
    </div>
  );
};

export default App;
