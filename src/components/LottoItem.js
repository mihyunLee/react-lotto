import Button from "./Button";

const LottoItem = ({ onRemove, id, isAuto, selectedNumbers }) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="LottoItem">
      <div className="tag">
        <span>{id + 1}</span>
        <span>{isAuto ? "자동" : "수동"}</span>
      </div>
      <div className="content">
        {selectedNumbers
          .sort((a, b) => a - b)
          .map((num) => (
            <span key={num}>{num}</span>
          ))}
      </div>
      <Button text={"삭제"} onClick={handleRemove} />
    </div>
  );
};

export default LottoItem;
