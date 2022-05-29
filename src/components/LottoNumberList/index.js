import { useState } from "react";

import { LottoNumberControl } from "../LottoNumberControl";
import { LottoNumberItem } from "../LottoNumberItem";

import "./style.css";

const LottoItems = Array.from(
    new Array(3), (v, i) => ({l_number: i, color: "success"})
)

export const LottoNumberList = ({ onSelect }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const saveNumbers = (newNum) => {
    setSelectedNumbers([...selectedNumbers, newNum]);
    console.log("SAVE NUMBERS")
    const items = LottoItem.map(item => {
      return item.l_number === newNum - 1 ? {...item, color: "error"} : item
    })

    setLottoItem(items)
    console.log(LottoItem)
    // console.log(LottoItem)
  };

  const removeNumbers = (newNum) => {
    const newNumbers = selectedNumbers.filter((item) => item !== newNum);
    setSelectedNumbers(newNumbers);
  };
  const onResetLottoItems = () => {
    const items = LottoItems.map(item => {
      return item.color === "error" ? {...item, color: "success"} : item
    })
    setSelectedNumbers([])
    setLottoItem(items)
    console.log(LottoItem)
  }
  // const onResetLottoItems = () => {
  //   setSelectedNumbers([])
  //   setLottoItem(LottoItems.map(it => {
  //     console.log(it.color == "error")
  //       return it.color === "error" ? {...it, color:"success"} : it
  //     }))
  //   console.log("ITEM : ")
  //   console.log(LottoItem)
  // }
  // // [{}, {}, {}...]

  const [LottoItem, setLottoItem] = useState(LottoItems)
  return (
    <div className="LottoNumberList">
      <div className="LottoNumber">
        {
          LottoItem.map(i => <LottoNumberItem
          key={i.l_number + 1}
          initColor={i.color}
          lottoNumber={i.l_number + 1}
          saveNumbers={saveNumbers}
          removeNumbers={removeNumbers}
          selectedNumbers={selectedNumbers}/>)
        }
      </div>
      <LottoNumberControl
        selectedNumbers={selectedNumbers}
        onSelect={onSelect}
        onReset={onResetLottoItems}
      />
    </div>
  );
};
