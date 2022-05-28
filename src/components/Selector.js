import { useState } from "react";
import Button from "./Button";

const list = [...Array(45).keys()].map((x) => ({ id: x + 1 }));

const Selector = () => {
  const LOTTO_MAX_COUNT = 6;

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const onSelect = (newNum) => {
    if (selectedNumbers.length >= LOTTO_MAX_COUNT) {
      alert("최대 6개까지 선택가능합니다.");
      return;
    }
    typeof newNum === "object"
      ? setSelectedNumbers(newNum)
      : selectedNumbers.includes(newNum)
      ? setSelectedNumbers(selectedNumbers.filter((item) => item !== newNum))
      : setSelectedNumbers([...selectedNumbers, newNum]);
  };

  const onRemove = () => {
    setSelectedNumbers([]);
  };

  const onAuto = () => {
    const randomNumArr = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 45 + 1);
      if (randomNumArr.indexOf(randomNum) === -1) {
        randomNumArr.push(randomNum);
      } else {
        i--;
      }
    }
    onSelect(randomNumArr);
  };

  return (
    <div className="Selector">
      <div className="cost_tag">
        <span>1,000원</span>
      </div>
      <div className="number_list">
        {list.map((item) => (
          <Button
            key={item.id}
            type={selectedNumbers.includes(item.id) ? "positive" : "default"}
            text={item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
      <div className="control_btn">
        <Button type={"negative"} text={"초기화"} onClick={onRemove} />
        <Button type={"negative"} text={"자동선택"} onClick={onAuto} />
        <Button type={"negative"} text={"완료"} onClick={() => alert("완료")} />
      </div>
    </div>
  );
};

export default Selector;
