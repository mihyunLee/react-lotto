import { useContext } from "react";
import { LottoDispatchContext, LottoStateContext } from "../App";
import Button from "./Button";
import LottoItem from "./LottoItem";

const LottoList = () => {
  const lottoList = useContext(LottoStateContext);
  const { onReset } = useContext(LottoDispatchContext);

  return (
    <div className="LottoList">
      <div className="header">
        <span>선택번호 확인</span>
        <Button text={"초기화"} type={"negative"} onClick={onReset} />
      </div>
      <div className="lotto_count">
        <span>선택된 로또 개수 : {lottoList.length}</span>
        <span>(로또는 최대 5개까지 구매 가능합니다.)</span>
      </div>
      <div className="lotto_list">
        {lottoList.map((item, index) => (
          <LottoItem key={item.id} idx={index + 1} {...item} />
        ))}
      </div>
      <div className="result_btn">
        <Button
          text={"결과보기"}
          type={"positive"}
          onClick={() => alert("결과보기")}
        />
      </div>
    </div>
  );
};

export default LottoList;
