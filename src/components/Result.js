import { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LottoDispatchContext, LottoStateContext } from "../App";
import LottoItem from "./LottoItem";

const Result = () => {
  let num = 1
  let autoTest = true;
  let numbers = [40, 34, 12, 8, 29, 38];
  const lottoList = useContext(LottoStateContext);

  return (
    <div className="LottoResult">
      <div className="header">
        <span>구매복권 당첨결과</span>
      </div>
      <div className="content">
        <span>당첨번호</span>
      </div>
      <div className="lotto_list">
        <h3>테스트</h3>        
        {/* <LottoItem key={item.id} {...item} /> */}
      </div>
      <div className="result_btn">
        <Link to='/'>
        <Button
          text={"다시하기"}
          type={"positive"}
        />
        </Link>
      </div>
    </div>
  );
};

export default Result;