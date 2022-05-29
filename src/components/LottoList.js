import Button from "./Button";
import LottoItem from "./LottoItem";

const LottoList = ({ lottoList }) => {
  return (
    <div className="LottoList">
      <div className="header">
        <span>선택번호 확인</span>
        <Button
          text={"초기화"}
          type={"negative"}
          onClick={() => alert("초기화")}
        />
      </div>
      <div className="lotto_list">
        {lottoList.map((item) => (
          <LottoItem key={item.id} {...item} />
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
