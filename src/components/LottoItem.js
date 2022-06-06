import React, { useContext } from "react";
import { LottoDispatchContext } from "../App";
import Button from "./Button";

import { changeColor } from "../utils/lottoColor";

const LottoItem = ({
  id,
  isDeleteBtnHide,
  isAuto,
  selectedNumbers,
  winningNumber,
}) => {
  const { onRemove } = useContext(LottoDispatchContext);

  const handleRemove = () => {
    onRemove(id);
  };

  const compareNumber = () => {
    let count = 0;
    let result = "";

    for (let i of selectedNumbers) {
      if (winningNumber.indexOf(i) !== -1) {
        count += 1;
      }
    }

    switch (count) {
      case 0:
      case 1:
        result = "낙첨";
        break;
      case 2:
        result = "5등";
        break;
      case 3:
        result = "4등";
        break;
      case 4:
        result = "3등";
        break;
      case 5:
        result = "2등";
        break;
      case 6:
        result = "1등";
        break;
      default:
        result = "";
    }

    return result;
  };

  return (
    <div className="LottoItem">
      <div className="tag">
        <span>{isAuto ? "자동" : "수동"}</span>
      </div>
      <div className="content">
        {selectedNumbers
          .sort((a, b) => a - b)
          .map((num) => (
            <div key={num} className={changeColor(num)}>
              <span>{num}</span>
            </div>
          ))}
      </div>
      {isDeleteBtnHide ? (
        <Button text={compareNumber()} />
      ) : (
        <Button text={"삭제"} onClick={handleRemove} />
      )}
    </div>
  );
};

export default React.memo(LottoItem);
