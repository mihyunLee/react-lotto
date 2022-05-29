import "./App.css";
import LottoList from "./components/LottoList";
import Selector from "./components/Selector";

const dummyData = [
  {
    id: 1,
    isAuto: false,
    selectedNumbers: [1, 4, 5, 2, 3, 7],
  },
  {
    id: 2,
    isAuto: true,
    selectedNumbers: [5, 1, 42, 32, 16, 27],
  },
  {
    id: 3,
    isAuto: false,
    selectedNumbers: [45, 12, 33, 2, 35, 6],
  },
  {
    id: 4,
    isAuto: false,
    selectedNumbers: [22, 5, 43, 11, 30, 31],
  },
  {
    id: 5,
    isAuto: true,
    selectedNumbers: [17, 36, 2, 41, 9, 29],
  },
];

const App = () => {
  return (
    <div className="App">
      <Selector />
      <LottoList lottoList={dummyData} />
    </div>
  );
};

export default App;
