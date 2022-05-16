import { Ticket } from "../Ticket";

export const SelectView = ({ numberSelectList }) => {
  const clickResetBtn = () => {
    console.log("초기화 버튼 클릭!");
  };

  return (
    <div>
      <span>선택번호 확인</span>
      <button onClick={clickResetBtn}>초기화</button>
      <div>
        {numberSelectList.map((item) => (
          <Ticket
            key={item.id}
            isAutoSelect={item.isAutoSelect}
            name={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
