import { useState } from "react";

import { LottoNumberControl } from "../LottoNumberControl";
import { LottoNumberItem } from "../LottoNumberItem";

export const LottoNumberList = ({ onSelect }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const saveNumbers = (newNum) => {
    setSelectedNumbers([...selectedNumbers, newNum]);
  };

  const removeNumbers = (newNum) => {
    const newNumbers = selectedNumbers.filter((item) => item !== newNum);
    setSelectedNumbers(newNumbers);
  };

  const LottoItems = Array.from(new Array(45), (v, i) => (
    <LottoNumberItem
      key={i + 1}
      lottoNumber={i + 1}
      saveNumbers={saveNumbers}
      removeNumbers={removeNumbers}
      selectedNumbers={selectedNumbers}
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
