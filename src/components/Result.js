import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LottoDispatchContext, LottoStateContext } from "../App";
import LottoItem from "./LottoItem";

const Result = () => {
  const lottoList = useContext(LottoStateContext);
  const { onReset } = useContext(LottoDispatchContext);

  return (
    <div className="LottoResult">
      <div className="header">
        <span>구매복권 당첨결과</span>
      </div>
      <div className="content">
        <span>당첨번호</span>
        <div className="winningNumber">
          {/* 무작위 당첨번호 리스트 보여주기! */}
        </div>
      </div>
      <div className="lotto_list">
        {lottoList.map((item) => (
          <LottoItem key={item.id} isDeleteBtnHide={true} {...item} />
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
