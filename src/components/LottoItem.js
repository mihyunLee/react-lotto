import React, { useContext } from "react";
import { LottoDispatchContext } from "../App";
import Button from "./Button";

const LottoItem = ({ id, isDeleteBtnHide, isAuto, selectedNumbers }) => {
  const { onRemove } = useContext(LottoDispatchContext);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleChangeColor = (num) => {
    let color = "";
    switch (parseInt(num / 10)) {
      case 0:
        color = "quotient-zero";
        break;
      case 1:
        color = "quotient-one";
        break;
      case 2:
        color = "quotient-two";
        break;
      case 3:
        color = "quotient-three";
        break;
      case 4:
        color = "quotient-four";
        break;
      default:
        color = "#e2e2e2";
    }
    return color;
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
            <div key={num} className={handleChangeColor(num)}>
              <span>{num}</span>
            </div>
          ))}
      </div>
      {!isDeleteBtnHide && <Button text={"삭제"} onClick={handleRemove} />}
    </div>
  );
};

export default React.memo(LottoItem);
