import { useState } from "react";

import { LottoNumberControl } from "../LottoNumberControl";
import { LottoNumberItem } from "../LottoNumberItem";

export const LottoNumberList = ({ onSelect }) => {
  const LOTTO_MAX_COUNT = 6;

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const saveNumbers = (newNum) => {
    setSelectedNumbers([...selectedNumbers, newNum]);
  };

  const deleteNumbers = (newNum) => {
    const newNumbers = selectedNumbers.filter((item) => item !== newNum);
    setSelectedNumbers(newNumbers);
  };

  // 로직 적용하기
  const checkLottoData = () => {
    if (selectedNumbers.length >= LOTTO_MAX_COUNT) {
      alert("최대 6개까지 선택 가능합니다.");
      return;
    }
  };

  const LottoItems = Array.from(new Array(45), (v, i) => (
    <LottoNumberItem
      key={i + 1}
      lottoNumber={i + 1}
      saveNumbers={saveNumbers}
      deleteNumbers={deleteNumbers}
      checkLottoData={checkLottoData}
    />
  ));

  return (
    <>
      {LottoItems}
      <LottoNumberControl
        selectedNumbers={selectedNumbers}
        onSelect={onSelect}
      />
    </>
  );
};
