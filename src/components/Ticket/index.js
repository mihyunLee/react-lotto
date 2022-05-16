export const Ticket = ({ name, isAutoSelect, selectedNumbers }) => {
  return (
    <div>
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
      <button>삭제</button>
    </div>
  );
};
