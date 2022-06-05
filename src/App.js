import React, { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import LottoList from "./components/LottoList";
import Selector from "./components/Selector";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "SUBMIT": {
      newState = [...state, action.data];
      break;
    }
    case "RESET": {
      newState = [];
      break;
    }
    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.selected);
      break;
    }
    default:
      return state;
  }
  return newState;
};
const findLastId = () => {
  let storageData = window.localStorage.getItem('lottoItems')
  if(storageData){
    let listStorage = JSON.parse(storageData)
    return listStorage[listStorage.length - 1].id + 1
  }
  return 0
}
const addLottoItemInLocalStorage = (item) => {
  let storageData = window.localStorage.getItem('lottoItems')
  if(storageData){
    let listStorage = JSON.parse(storageData)
    listStorage.push(item)
    window.localStorage.setItem('lottoItems', JSON.stringify(listStorage))
  }else{
    window.localStorage.setItem('lottoItems', JSON.stringify([item]))
  }
}
const removeLottoItemInLocalStorage = (selected) => {
  let storageData = window.localStorage.getItem('lottoItems')
  if(storageData){
    let listStorage = JSON.parse(storageData)
    listStorage.filter(item => item.id !== selected)
  }
}
const getLottoItemInLocalStorage = () => {
  const storageData = window.localStorage.getItem('lottoItems')
  if(storageData)
    return JSON.parse(storageData)
  return []
}
export const LottoStateContext = React.createContext();
export const LottoDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, getLottoItemInLocalStorage());
  const dataId = useRef(findLastId());

  const onSubmit = useCallback((isAuto, selectedNumbers) => {
    dispatch({
      type: "SUBMIT",
      data: { isAuto, selectedNumbers, id: dataId.current },
    });

    dataId.current += 1;
    addLottoItemInLocalStorage({ isAuto, selectedNumbers, id: dataId.current })
  }, []);

  const onReset = useCallback(() => {
    dispatch({
      type: "RESET",
    });

    dataId.current = 0;
  }, []);

  const onRemove = useCallback((selected) => {
    dispatch({
      type: "REMOVE",
      selected,
    });
    removeLottoItemInLocalStorage(selected)
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onSubmit, onReset, onRemove };
  }, []);

  return (
    <LottoStateContext.Provider value={data}>
      <LottoDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <Selector />
          <LottoList />
        </div>
      </LottoDispatchContext.Provider>
    </LottoStateContext.Provider>
  );
};

export default App;
