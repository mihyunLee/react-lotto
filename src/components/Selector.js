import React, { useCallback, useContext, useState } from "react";
import { LottoDispatchContext, LottoStateContext } from "../App";
import Button from "./Button";
import SelectorItem from "./SelectorItem";

import { makeRandomNumber } from "../utils/random";

const list = [...Array(45).keys()].map((x) => ({ id: x + 1 }));

const Selector = () => {
  const SELECTED_MAX_COUNT = 6;
  const LOTTO_MAX_COUNT = 5;

  const [state, setState] = useState({
    isAuto: false,
    selectedNumbers: [],
  });

  const lottoList = useContext(LottoStateContext);
  const { onSubmit } = useContext(LottoDispatchContext);

  const handleChangeState = (newNum) => {
    setState((state) => ({
      isAuto: false,
      selectedNumbers: state.selectedNumbers.includes(newNum)
        ? state.selectedNumbers.filter((item) => item !== newNum)
        : [...state.selectedNumbers, newNum],
    }));
  };

  const handleSelect = useCallback(
    (newNum) => {
      if (
        state.selectedNumbers.length >= SELECTED_MAX_COUNT &&
        !state.selectedNumbers.includes(newNum)
      ) {
        alert("최대 6개까지 선택가능합니다.");
        return;
      }

      if (typeof newNum === "object") {
        setState({ isAuto: true, selectedNumbers: newNum });
      } else {
        handleChangeState(newNum);
      }
    },
    [state.selectedNumbers]
  );

  const handleReset = () => {
    setState({
      isAuto: false,
      selectedNumbers: [],
    });
  };

  const handleAuto = () => {
    handleSelect(makeRandomNumber(), true);
  };

  const handleSubmit = () => {
    if (
      state.selectedNumbers.length === SELECTED_MAX_COUNT &&
      lottoList.length < LOTTO_MAX_COUNT
    ) {
      onSubmit(state.isAuto, state.selectedNumbers);
      handleReset();
    }
  };

  return (
    <div className="Selector">
      <div className="cost_tag">
        <span>1,000원</span>
      </div>
      <div className="number_list">
        {list.map((item) => (
          <SelectorItem
            key={item.id}
            {...item}
            isSelected={state.selectedNumbers.includes(item.id)}
            onClick={handleSelect}
          />
        ))}
      </div>
      <div className="control_btn">
        <Button type={"negative"} text={"초기화"} onClick={handleReset} />
        <Button type={"negative"} text={"자동선택"} onClick={handleAuto} />
        <Button type={"negative"} text={"완료"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default React.memo(Selector);
