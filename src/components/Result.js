import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LottoDispatchContext, LottoStateContext } from "../App";

import Button from "./Button";
import LottoItem from "./LottoItem";

import { makeRandomNumber } from "../utils/random";
import { changeColor } from "../utils/lottoColor";

const Result = () => {
  const lottoList = useContext(LottoStateContext);
  const { onReset } = useContext(LottoDispatchContext);

  const winningNumber = makeRandomNumber();

  return (
    <div className="Result">
      <div className="header">
        <span>구매복권 당첨결과</span>
      </div>
      <div className="winning_number_wrapper">
        <span>당첨번호</span>
        <div className="winning_number">
          {winningNumber
            .sort((a, b) => a - b)
            .map((num) => (
              <span key={num} className={changeColor(num)}>
                {num}
              </span>
            ))}
        </div>
      </div>
      <div className="lotto_list">
        {lottoList.map((item) => (
          <LottoItem
            key={item.id}
            isDeleteBtnHide={true}
            winningNumber={winningNumber}
            {...item}
          />
        ))}
      </div>
      <div className="result_btn">
        <Link to="/">
          <Button text={"다시하기"} type={"positive"} onClick={onReset} />
        </Link>
      </div>
    </div>
  );
};

export default Result;
