import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./mediaquery.css";

import LottoList from "./components/LottoList";
import Selector from "./components/Selector";
import Result from "./components/Result";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      newState = action.data;
      break;
    }
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

  localStorage.setItem("lottoItems", JSON.stringify(newState));

  return newState;
};

export const LottoStateContext = React.createContext();
export const LottoDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  useEffect(() => {
    const storageData = localStorage.getItem("lottoItems");
    if (storageData) {
      const lottoList = JSON.parse(storageData);
      if (lottoList.length >= 1) {
        dataId.current = parseInt(lottoList[lottoList.length - 1].id) + 1;
        dispatch({ type: "INIT", data: lottoList });
      }
    }
  }, []);

  const onSubmit = useCallback((isAuto, selectedNumbers) => {
    dispatch({
      type: "SUBMIT",
      data: { isAuto, selectedNumbers, id: dataId.current },
    });

    dataId.current += 1;
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
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onSubmit, onReset, onRemove };
  }, []);

  return (
    <LottoStateContext.Provider value={data}>
      <LottoDispatchContext.Provider value={memoizedDispatches}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="App">
                  <Selector />
                  <LottoList />
                </div>
              }
            />
            <Route
              path="result"
              element={
                <div className="App">
                  <Result />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </LottoDispatchContext.Provider>
    </LottoStateContext.Provider>
  );
};

export default App;
