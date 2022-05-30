import "./style.css";

export const Ticket = ({
  onRemove,
  id,
  name,
  isAutoSelect,
  selectedNumbers,
}) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="Ticket">
      <span>
        {name + 1} {isAutoSelect ? "자동" : "수동"}
      </span>
      <div>
        <ul>
          {selectedNumbers
            .sort((a, b) => a - b)
            .map((num) => (
              <li key={num}>{num}</li>
            ))}
        </ul>
      </div>
      <button onClick={handleRemove}>삭제</button>
    </div>
  );
};
