import { Ticket } from "../Ticket";

export const SelectView = () => {
  const clickResetBtn = () => {
    console.log("초기화 버튼 클릭!");
  };

  return (
    <div>
      <span>선택번호 확인</span>
      <button onClick={clickResetBtn}>초기화</button>
      <Ticket name={"A"} />
      <Ticket name={"B"} />
      <Ticket name={"C"} />
      <Ticket name={"D"} />
      <Ticket name={"E"} />
    </div>
  );
};
