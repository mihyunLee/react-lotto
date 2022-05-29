import Button from "./Button";
import LottoItem from "./LottoItem";

const LottoList = ({ onReset, onRemove, lottoList }) => {
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
        {lottoList.map((item) => (
          <LottoItem onRemove={onRemove} key={item.id} {...item} />
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
