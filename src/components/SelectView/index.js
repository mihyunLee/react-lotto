import { Ticket } from "../Ticket";

export const SelectView = ({ onReset, onRemove, numberSelectList }) => {
  const clickResetBtn = () => {
    onReset();
  };

  return (
    <div>
      <span>선택번호 확인</span>
      <button onClick={clickResetBtn}>초기화</button>
      <div>
        {numberSelectList.map((item) => (
          <Ticket
            onRemove={onRemove}
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
