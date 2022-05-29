import { useState } from "react";
import Button from "./Button";

const list = [...Array(45).keys()].map((x) => ({ id: x + 1 }));

const Selector = ({ onSubmit }) => {
  const LOTTO_MAX_COUNT = 6;

  const [state, setState] = useState({
    isAuto: false,
    selectedNumbers: [],
  });

  const handleSelect = (newNum) => {
    if (
      state.selectedNumbers.length >= LOTTO_MAX_COUNT &&
      !state.selectedNumbers.includes(newNum)
    ) {
      alert("최대 6개까지 선택가능합니다.");
      return;
    }

    if (typeof newNum === "object") {
      setState({ isAuto: true, selectedNumbers: newNum });
    } else {
      state.selectedNumbers.includes(newNum)
        ? setState({
            isAuto: false,
            selectedNumbers: state.selectedNumbers.filter(
              (item) => item !== newNum
            ),
          })
        : setState({
            isAuto: false,
            selectedNumbers: [...state.selectedNumbers, newNum],
          });
    }
  };

  const handleReset = () => {
    setState({
      isAuto: false,
      selectedNumbers: [],
    });
  };

  const handleAuto = () => {
    const randomNumArr = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 45 + 1);
      if (randomNumArr.indexOf(randomNum) === -1) {
        randomNumArr.push(randomNum);
      } else {
        i--;
      }
    }
    handleSelect(randomNumArr);
  };

  const handleSubmit = () => {
    onSubmit(state.isAuto, state.selectedNumbers);
    handleReset();
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
            type={
              state.selectedNumbers.includes(item.id) ? "positive" : "default"
            }
            text={item.id}
            onClick={() => handleSelect(item.id)}
          />
        ))}
      </div>
      <div className="control_btn">
        <Button type={"negative"} text={"초기화"} onClick={handleReset} />
        <Button type={"negative"} text={"자동선택"} onClick={handleAuto} />
        <Button type={"negative"} text={"완료"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Selector;
