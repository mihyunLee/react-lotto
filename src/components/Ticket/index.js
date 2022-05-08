import { useState } from "react";

export const Ticket = ({ name }) => {
  const [numbers, setNumbers] = useState([4, 7, 31, 12, 23, 5]);
  const delNum = () => {
    setNumbers((arr) => (arr = []));
  };

  return (
    <div>
      <span>{name} 미지정</span>
      <div>
        <ul>
          {numbers
            .sort((a, b) => a - b)
            .map((num) => (
              <li key={num}>{num}</li>
            ))}
        </ul>
      </div>
      <button onClick={delNum}>삭제</button>
    </div>
  );
};
