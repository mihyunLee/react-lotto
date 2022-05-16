import { LottoNumberItem } from "../LottoNumberItem";

export const LottoNumberList = ({ reset }) => {
  const lottoMaxCount = 6;
  let lottoData = [];
  const lottoDataCheck = ({ LottoNumber, color }) => {
    if (color === "success") {
      lottoData = lottoData.filter((item) => {
        return item !== LottoNumber;
      });
    } else {
      if (lottoData.length >= lottoMaxCount) {
        alert("최대 6개까지 선택 가능합니다.");
        return false;
      }
      lottoData.push(LottoNumber);
    }
    return true;
  };

  const LottoItems = Array.from(new Array(45), (x, i) => (
    <LottoNumberItem
      key={i + 1}
      LottoNumber={i + 1}
      lottoData={lottoDataCheck}
    />
  ));

  return <>{LottoItems}</>;
};
