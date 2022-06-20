import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LottoDispatchContext, LottoStateContext } from "../App";

import Button from "./Button";
import LottoItem from "./LottoItem";
import Animation from "./Animation";

import { makeRandomNumber } from "../utils/random";
import { changeColor } from "../utils/lottoColor";

const Result = () => {
  const lottoList = useContext(LottoStateContext);
  const { onReset } = useContext(LottoDispatchContext);

  const winningNumber = makeRandomNumber();

  const navigate = useNavigate();
  const [isAnimationOver, setIsAnimationOver] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsAnimationOver(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (lottoList.length < 1) {
      alert("선택된 로또 번호가 없습니다.");
      navigate("/", { replace: true });
    }
  }, [lottoList.length]);

  return (
    <div className="Result">
      {!isAnimationOver && <Animation />}
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
        <Button
          text={"다시하기"}
          type={"positive"}
          onClick={() => {
            onReset();
            navigate("/", { replace: true });
          }}
        />
      </div>
    </div>
  );
};

export default Result;
